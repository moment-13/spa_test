<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterTodoRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
  

        /**
         * ３項演算で、image_pathにファイルが存在するかどうか
         * TRUEの場合：requestにあるimage_pathのname属性で保存されたファイルの元の名前を呼び出す
         * FALSEの場合：$filenameにNULLを入れる
         */
        $filename = isset($request->image_path) ? $request->image_path->getClientOriginalName() : NULL;


        /**
         * storeAs()によって php artisan storage:linkでシンボリックリンクが作られていれば、
         * storage/app/public/images配下に第二引数の名前で保存される。
         * 戻り値が保存したpathになるので変数で受けとる。images/hoge
         * 今回はstorage/app/public/imagesに元の名前で保存
         */

        /** ３項演算:$filenameにファイル名が入っているかどうか
         *  TRUEの場合：storage/app/public/imagesにファイルを保存し$image_pathにパスを入れる
         *  FALSEの場合：画像がない場合用のno_image画像パスを$image_pathに入れる
         */
        $image_path = isset($filename) ? $request->image_path->storeAs('public/images',$filename) : 'public/images/no_image.png';






        try {
            // トランザクション開始
            DB::beginTransaction();
        
        // モデルのcreate()を使用、これはモデルにfillableかguardedが指定されている必要がある
        Todo::create([
            'title' => $request->title,
            'detail' => $request->detail,
            'due_date' => $request->due_date,
            'priority' => $request->priority,
            'image_path' => $image_path,
            'category_id' => $request->category_id,
        ]);

            // トランザクション開始してからここまでのDB操作を適用
            DB::commit();
        } catch (\Exception $e) {
            // トランザクション開始してからここまでのDB操作を無かったことにする
            DB::rollBack();
            // エラー画面の表示
            view('commons.db_error');
        }

        // 登録が完了したフラッシュメッセージ
        session()->flash('message', $request->title . 'を作成しました。');

        return Inertia::render('Dashboard');
    

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
