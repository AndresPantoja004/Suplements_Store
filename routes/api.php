<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AuthController;

// Rutas públicas
Route::get('/categories', [CategoryController::class, 'index']);        // Listar todas las categorías
Route::get('/categories/{id}', [CategoryController::class, 'show']);    // Mostrar una categoría específica

// Rutas protegidas (autenticación requerida)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/categories', [CategoryController::class, 'store']);    // Crear categoría
    Route::put('/categories/{id}', [CategoryController::class, 'update']); // Actualizar categoría
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']); // Eliminar categoría

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
