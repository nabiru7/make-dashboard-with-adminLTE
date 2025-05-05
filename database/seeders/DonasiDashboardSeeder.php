<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class DonasiDashboardSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('id_ID');
        $metodes = ['qris', 'tunai', 'mbanking'];
        $status = ['pending', 'approved', 'rejected'];

        for ($i = 0; $i < 50; $i++) {
            DB::table('donasi_dashboard')->insert([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'amount' => $faker->numberBetween(10000, 1000000),
                'donation_date' => $faker->dateTimeBetween('-1 year', 'now'),
                'donation_method' => $faker->randomElement($metodes),
                'status' => $faker->randomElement($status),
                'message' => $faker->optional()->sentence,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
