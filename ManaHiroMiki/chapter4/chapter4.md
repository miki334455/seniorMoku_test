# chapter4
## イベントで操作しよう！
イベントの種類はクリック以外にです。

02demo
// イベントloadで画面を読込が完了した時にする
window.addEventListener('load', () => {
  // 画面を消すクラスloadedを追加する。
  loading.classList.add('loaded');
});

04demo
 // ボタンがクリックした時
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  //toggle()は、引数に指定したクラスがあれば削除し、なければ追加するメソッドです
  document.body.classList.toggle('dark-theme');

  07demo
 //入力した文字数を数える
 lengthでカウント
 文字数によって表示を変える 

 10demo
 //チェックを入れるとボタンを押せるようにする
 ボタンをクリックできない状態にしておく　inputに属性 disabled 付与
 checkedでbtn.disabled=false にし　ボタンを有効化する
 //効率のいい書き方 真偽に否定!を使う
  isAgreed.addEventListener('change', () => {
    btn.disabled = !isAgreed.checked;
  });

13demo
// ページのスクロール量を表示（プログレスバーを設定）
HTML
　<div id="bar"></div>
CSS
#bar {
    background-color: #0bd;
    position: fixed;
    top: 0;
    left: 0;
    height: 10px;
    /* width: 100%; */
}
JS
イベント　'scroll'

ページのサイズを取得
scrollHeight 　と　clientHeight で取得