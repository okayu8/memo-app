<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MemoApp;
use App\User;
use DB;
use Illuminate\Support\Facades\Auth;

class MemoAppController extends Controller
{
    public function index()
    {
        //ログインuserを特定
        //$user = Auth::user();
        //memo_appテーブルからデータを取得
        $memos = MemoApp::all();
        //JSONで返す
        return response()->json($memos);
    }

    //memoの作成
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'text' => 'required|max:6000',
        ]);
        $memos = new Memo();
        $user = Auth::user();
        $memos->title = $request->title;
        $memos->text = $request->text;
        //TODO:ログイン認証を実装したらコメントアウト外す
        //$todo->user_id = $user->id;
        $todo->save();

        return response()->json();
    }
}
