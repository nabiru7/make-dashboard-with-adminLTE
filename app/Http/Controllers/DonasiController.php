<?php

namespace App\Http\Controllers;

use App\Models\Donasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DonasiController extends Controller
{
    //bagian ini untuk mengatur bagian penyimpanan data donasi, membantu bagian create
    public function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'amount' => 'required|numeric',
            'donation_date' => 'required|date',
            'donation_method' => 'required|string',
            'status' => 'required|string',
            'message' => 'nullable|string',
        ]);

        $donasi = Donasi::create([
            'name' => $request->name,
            'email' => $request->email,
            'amount' => $request->amount,
            'donation_date' => $request->donation_date,
            'donation_method' => $request->donation_method,
            'status' => $request->status,
            'message' => $request->message,
        ]);

        return Inertia::render('Dashboard');
    }


    //bagian ini untuk update data
    public function update(Request $request, $id){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'amount' => 'required|numeric',
            'donation_date' => 'required|date',
            'donation_method' => 'required|string',
            'status' => 'required|string',
            'message' => 'nullable|string',
        ]);

        $donasi = Donasi::findOrFail($id);
        $donasi->update($validated);

        return response()->json(['message' => 'Data berhasil diperbarui!']);
    }


    //bagian ini untuk menghapus data donasi
    public function destroy($id){
        $donasi = Donasi::findOrFail($id);
        $donasi->delete();

        return response()->json(['message' => 'Data berhasil dihapus!']);
    }
}
