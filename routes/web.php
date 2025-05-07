<?php

use App\Http\Controllers\DonasiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Donasi;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', function() {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/donasi-dashboard', function () {
    return response()->json(Donasi::all());
})->name('donasi.index');

Route::post('/donasi-dashboard', [DonasiController::class, 'store']);

Route::put('/donasi-dashboard/{id}', [DonasiController::class, 'update']);

Route::delete('/donasi-dashboard/{id}', [DonasiController::class, 'destroy']);

require __DIR__.'/auth.php';
