<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//ruta para pagina donde se muestran todos los productos 
// Route::get('/listproducts', function () {
//     return Inertia::render('ListProducts');
// })->middleware(['auth', 'verified'])->name('listproducts');
//ruta para pagina donde se muestran todos los productos
Route::get('/productlist', function () {
    return Inertia::render('ProductList');
})->middleware(['auth', 'verified'])->name('productlist');


Route::get('/product/{id}', function ($id) {
    return Inertia::render('ProductSpecific', [
        'id' => $id
    ]);
})->middleware(['auth', 'verified'])->name('productspecific');

Route::get('/cart', function () {
    return Inertia::render('CartProducts');
})->middleware(['auth', 'verified'])->name('cart');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
