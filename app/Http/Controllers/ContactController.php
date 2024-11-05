<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string',
            'message' => 'required|string',
        ]);

        try {
            Resend::emails()->send([
                'from' => 'Dynamic Towing <noreply@dynamictowingtransport.com.au>',
                'to' => 'info.dynamictowing@gmail.com',
                'subject' => 'New Contact Request from Website',
                'html' => view('emails.quote-request', $request->all())->render(),
            ]);

            return back()->with([
                'success' => 'Your message has been sent successfully!'
            ]);

        } catch (\Exception $e) {
            return back()->with([
                'error' => 'Failed to send your message. Please try again later.'
            ]);
        }
    }
}