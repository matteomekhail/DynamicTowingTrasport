<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
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

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy', [
        'title' => 'Privacy Policy'
    ]);
})->name('privacy.policy');

Route::get('/terms-of-service', function () {
    return Inertia::render('TermsOfService', [
        'title' => 'Terms of Service'
    ]);
})->name('terms.service');

Route::post('/contactEmail', [ContactController::class, 'store'])->name('contact.store');

require __DIR__.'/auth.php';
