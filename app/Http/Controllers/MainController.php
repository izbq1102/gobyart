<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.custom');
    }

    public function index(){
        return view('main.index');
    }
}
