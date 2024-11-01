<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');


Route::get('/about', function () {
    return Inertia::render('About', [
        'title' => 'About Us'
    ]);
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services', [
        'title' => 'Our Services'
    ]);
})->name('services');

Route::get('/technology', function () {
    return Inertia::render('Gallery', [
        'title' => 'Technology'
    ]);
})->name('technology');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'title' => 'Contact Us'
    ]);
})->name('contact');


require __DIR__.'/auth.php';
