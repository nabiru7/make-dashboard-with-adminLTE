<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Donasi extends Model
{
    use HasFactory;

    protected $table = 'donasi_dashboard'; 

    protected $fillable = [
        'name',
        'email',
        'amount',
        'donation_date',
        'donation_method',
        'status',
        'message',
    ];
}
