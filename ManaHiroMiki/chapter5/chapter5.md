# 複数のデータを使ってみよう
02-demo 
// insertAdjacentHTML('挿入位置','挿入内容') タグの挿入
menu IDの<div>タグに挿入
google Fontsの活用　https://fonts.google.com

03-demo
配列で複数の画像ファイル名をまとめる
配列の要素間の区切　, 

04-demo
配列[インデックス 0から]
２０１５年からconst,letが使える。以前varだけ
配列操作メソッド　col-array-demo

05-demo
 for(let i = 1; i <=10; i++){
            console.log('こんにちは！');
    }    

06-demo
for文で画像一覧を作成　length

07-demo
変数let  定数const

08-demo
オブジェクトで　画像・メニュー名・値段　をまとめる
09-demo
オブジェクトの取得（読出し）
10-demo
配列とオブジェクト

11-demo
一覧表示
画像を取得　＄で文字
 const content = `<div><img src="images/${lists[i].img}" alt=""><h2>${lists[i].name}</h2><p>${lists[i].price}円</p></div>`;

12-demo
分轄代入　定数名とキーを同じにするとわかりやすい
const name = lists[i].name;
    const img = lists[i].img;
    const price = lists[i].price;

    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;

シンプルデータ　　配列
複数項目　　　　　オブジェクト
複数項目が順に並ぶ　配列とオブジェクトを組み合わせる　

col-math Mathオブジェクト
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math

