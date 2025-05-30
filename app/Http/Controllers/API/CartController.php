<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Product;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:1'
        ]);

        $user = Auth::user();

        // Obtener o crear carrito
        $cart = Cart::firstOrCreate(
            ['user_id' => $user->id]
        );

        // Verificar si el producto ya está en el carrito
        $item = CartItem::where('cart_id', $cart->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($item) {
            // Si ya está, incrementa cantidad
            $item->quantity += $request->quantity ?? 1;
            $item->save();
        } else {
            // Si no está, lo añade
            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity ?? 1
            ]);
        }

        return response()->json(['message' => 'Producto agregado al carrito'], 200);
    }

        public function getCart()
    {
        $user = auth()->user();
        $cart = $user->cart;

        if (!$cart) {
            return response()->json(['items' => []]);
        }

        $items = $cart->items()->with('product')->get();

        return response()->json([
            'items' => $items->map(function ($item) {
                return [
                    'id' => $item->id,
                    'product_id' => $item->product->id,
                    'name' => $item->product->name,
                    'description' => $item->product->description,
                    'price' => $item->product->price,
                    'image' => $item->product->image,
                    'quantity' => $item->quantity,
                    'total' => $item->product->price * $item->quantity,
                ];
            }),
        ]);
    }
}

