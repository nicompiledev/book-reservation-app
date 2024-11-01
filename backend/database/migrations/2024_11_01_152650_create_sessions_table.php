<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->text('payload');
            $table->integer('last_activity');
            $table->integer('user_id')->nullable(); // Campo para almacenar el ID del usuario
            $table->string('ip_address')->nullable(); // IP del usuario
            $table->text('user_agent')->nullable(); // User Agent
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
}
