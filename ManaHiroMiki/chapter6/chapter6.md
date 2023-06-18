#アニメーションを加える
querySelector とgetElementBy は前者がCSSのように記述できるので使いやすい
#ID名  .クラス名　’タグ名’
:hover :firdt-chaild :last-chaild などの疑似クラスが使える

04-demo
見出しを下から上へ浮き上がる

web animations API
動かす要素.animate(動かす内容keyframes,再生時間options)；

const heading = document.querySelector('#heading');

const keyframes = {
  opacity: [0, 1], //透明から不透明に 
  translate: ['0 50px', 0],
};
const options = {
  duration: 2000,
  easing: 'ease',
};

heading.animate(keyframes, options);

６－７　動きの詳細　指定できるプロパティ
delay 開始を遅らせる　
direction 実行する方向
    nomal
    alternate 奇数、偶数で反対方向に動作
    reverse
    alternate-reverse
duration 再生時間
easing 変化速度やタイミング
    liner
    ease
    ease-in
    ease-out
    ease-in-out
    steps()
    cubic-bezier()
fill アニメーションの再生前後の状態
    none
    forwards
    backwards
    both
iterations アニメーションを繰返す回数
    Infinity　無限ループ

08-demo1
    くるっと回転する見出し
08-demo2
    色が変化する見出し
08-demo3
    背景が伸びる見出し
08-demo4
    ふよふよ動く見出し

Vanilla JS　jQueryなどのライブラリーを何も使っていないプレーンなJavaScript

09-demo
複数の画像を順番に表示

12-demo1 回転する画像
12-demo2　下から浮き上がる
12-demo3　ふわふわと落ちていく
12-demo4　ぼかしからくっきりに表示

13-demo
スクロールとアニメーションを組み合わせ
intersection Observer API 交差を監視する
交差したことを検知して関数を呼び出し、動作する

基本の書き方
➀　// して欲しい内容を書く
　　//　監視対象が範囲内に現れたら実行する動作
    const showKirin = (entries) => {
        const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
        };
        //console.log('キリンさんです');
        //console.log(entries[0].target);
        entries[0].target.animate(keyframes, 600);
    };
  
⓶、⓷　// 監視ロボットの導入と設定
const kirinObserver = new IntersectionObserver(showKirin);

⓸　// #kirinを監視するよう指示
kirinObserver.observe(document.querySelector('#kirin'));

cssのアニメ　デモ参照
