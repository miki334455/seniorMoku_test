/* chapter3  JavaScriptの基本を学ぼう！
1.最初にcolorPickerを動かして、イメージを掴む。
2.基本HTML　<input id="colorPicker" type="color"> にアクションを加える。
*/

//　定数constを使ってDOM（データ構造）連結をスッキリしたコードに変貌 
const on = document.querySelector('#off');
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// JavaScriptが動作したらコメントを変える
on.style.color = 'red';
on.textContent = `JavaScriptがON`;


// カラーピッカーを操作したときの一連の動作を関数で定義する（アロー関数）
// function宣言は古い関数定義です。同じに動作する。
// 関数を後から定義するとエラーが発生するので、先に宣言します。

const colorBg = () => {
  // styleで選択した色を背景色に設定
  document.body.style.backgroundColor = color.value;
  
  // カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = `カラーコード: ${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード: ${color.value} (black)`;
  } else {
    text.textContent = `カラーコード: ${color.value}`;
  }
}

// イベント待ちの起動でアクションを実現する
// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);