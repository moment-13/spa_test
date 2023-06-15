<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TodoController;
use App\Models\Category;
use App\Models\Todo;

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// カテゴリ作成
Route::post('/category/store',  [CategoryController::class, 'store'])
->middleware(['auth', 'verified'])->name('category.store');

Route::post('/todo/store',  [TodoController::class, 'store'])
->middleware(['auth', 'verified'])->name('todo.store');





Route::get('/test', function() {
    return Inertia::render('Testpage', ['todos' => Todo::all(), 'categories' => Category::all()]);
});

Route::get('/test2', function() {
    return Inertia::render('Testpage2', ['exname' => 'テストしてるよ2', 'categories' => Category::all()]);
});

Route::get('/gridtest', function() {
    return Inertia::render('GridTest', ['exname' => 'テストしてるよ2']);
});

// 練習
Route::get('/header', function () {
    return Inertia::render('Compornents/Header');
})->name('header');

Route::get('/file', function () {
    return Inertia::render('FileTest');
});

Route::get('/ref', function () {
    return Inertia::render('RefTest');
});

Route::get('/upload', function () {
    return Inertia::render('UploadTest');
});

Route::get('/showtest', function () {
    return Inertia::render('Compornents/ShowTodo', ['todo' => Todo::first()]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
