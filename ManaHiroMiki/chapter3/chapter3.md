# chapter3
## JavaScriptの基本を学ぼう！
最初にcolorPickerを動かしてみる。イメージを掴む。

02demo ベースのHTML,css,jsをセット

    基本　<input id="colorPicker" type="color">
    Javascriptは何もない　console.log('準備完了！')で動作確認
    <script src="js/script.js" defer></script>をheadに入れる時はdefer属性を入れておく。

03demo 色の値を取得する

    console.log(document.querySelector('#colorPicker').value);
    セレクタ―はIDなので#  クラスなら.で指定
    ピッカーを動かして、値の読込が終わっているので変わりません。
    inputにValueを付けて変更してみて下さい
    <input id="colorPicker" type="color" value="#00bbdd">

04demo　Javascriptからテキストを変更 　＝は代入するの意味

    document.querySelector('#colorText').textContent = 'カラーコード：';
    textContentはテキストだけ
    innerHTMLにするとタグを認識して表示できる
    document.querySelector('#colorText').innerHTML = '<h1>カラーコード：</h1>';

06demo DOM（データ構造）で操作する。

   document.querySelector('#colorText').textContent = 'カラーコード：'+ document.querySelector('#colorPicker').value;
   テンプレート文字列で表記
   document.querySelector('#colorText').textContent = `'カラーコード:${document.querySelector('#colorPicker').value} `;
07demo 定数を使ってDOM連結をスッキリしたコードに変貌
    const text = document.querySelector('#colorText');
    const color = document.querySelector('#colorPicker');

    text.textContent = `カラーコード：${color.value}`;
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar 

08demo イベントメソッド
// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);　

09demo　関数を定義する（アロー関数）
// カラーピッカーを操作したときの一連の動作
const colorBg = () => {
  // カラーコードを表示
  text.textContent = `カラーコード：${color.value}`;
}
事前に関数を定義しないとエラーがでる。

10demo1
10demo2
11demo1
11demo2
col-demo1
col-demo2
col-demo3
col-demo4
colorPicker

