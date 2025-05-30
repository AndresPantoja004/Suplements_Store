<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CartController;

// Rutas públicas
Route::get('/categories', [CategoryController::class, 'index']);        // Listar todas las categorías
Route::get('/categories/{id}', [CategoryController::class, 'show']);    // Mostrar una categoría específica
Route::get('/products/{id}', [ProductController::class, 'show']);    // Mostrar un producto específico
Route::post('/login', [AuthController::class, 'login']);      // Login
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum'); // Logout
Route::get('/products', [ProductController::class, 'index']);        // Listar todos los productos
Route::post('/products', [ProductController::class, 'store']); // Crear producto

// Rutas protegidas (autenticación requerida)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/categories', [CategoryController::class, 'store']);    // Crear categoría
    Route::put('/categories/{id}', [CategoryController::class, 'update']); // Actualizar categoría
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']); // Eliminar categoría
    Route::delete('/products/{id}', [CategoryController::class, 'destroy']); // Eliminar producto
    Route::post('/cart/add', [CartController::class, 'addToCart']);
    Route::middleware('auth:sanctum')->get('/cart', [CartController::class, 'getCart']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
