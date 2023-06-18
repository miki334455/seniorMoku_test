const loading = document.querySelector('#loading');
// イベントloadで画面を読込が完了した時にする
window.addEventListener('load', () => {
  // 画面を消すクラスloadedを追加する。
  loading.classList.add('loaded');
});