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
                'from' => 'Dynamic Towing <onboarding@resend.dev>',
                'to' => 'info.dynamictowing@gmail.com',
                'subject' => 'New Contact Request from Website',
                'html' => view('emails.contact', $validated)->render(),
            ]);

            if ($request->wantsJson()) {
                return response()->json(['message' => 'Email sent successfully']);
            }

            return redirect()->back()->with('success', 'Email sent successfully');

        } catch (\Exception $e) {
            if ($request->wantsJson()) {
                return response()->json(['message' => 'Failed to send email'], 500);
            }

            return redirect()->back()->with('error', 'Failed to send email');
        }
    }
} 