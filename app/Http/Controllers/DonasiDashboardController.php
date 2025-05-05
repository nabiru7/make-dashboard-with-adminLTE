<?php

namespace App\Http\Controllers;

use App\Models\Donasi;
use Inertia\Inertia;

class DonasiDashboardController extends Controller
{
    public function index()
    {
        $donasi = Donasi::all();
        return Inertia::render('DonasiDashboard', [
            'donasis' => $donasi
        ]);
    }
}
