'use strict';

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        // const results = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
        /* 0~6の整数値をランダムで返す */
        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];

        /* 上の二行を合わせたパターンで良く使う */
        // btn.textContent = results[Math.floor(Math.random() * results.length)];

        /* 確率を操作するパターン */
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
            result.textContent = '大吉です。この上なく縁起・運勢がいい1日になるでしょう。こんな日こそ新しいことにチャレンジして自分の可能性を広げましょう！'; // 5%
        } else if (n < 0.2) {
            btn.textContent = '吉'; // 15%
            result.textContent = '吉です。縁起・運勢がいい1日になるでしょう。好きなあの子に告白するチャンスが到来するので、自分の気持ちをストレートに伝えましょう！';
        } else if (n < 0.4) {
            btn.textContent = '中吉'; // 20%
            result.textContent = '中吉です。ほどほどに縁起・運勢がいい1日になるでしょう。仕事で新たなアイデアが浮かびます。実行に移しましょう。';
        } else if (n < 0.6) {
            btn.textContent = '小吉'; // 20%
            result.textContent = '小吉です。通勤時に財布が落ちていることでしょう。拾うか拾わないかはあなた次第ですが、交番に届けると落とし主から感謝されること間違いなしです！';
        } else if (n < 0.8) {
            btn.textContent = '末吉'; // 20%
            result.textContent = '末吉です。晩ご飯にあなたの好きな唐揚げが登場するでしょう。しかし鳥もも肉ではなく鶏むね肉でしょう。健康を気遣ってくれる妻に感謝しましょう。';
        } else if (n < 0.95) {
            btn.textContent = '凶'; // 15%
            result.textContent = '凶です。縁起・運勢が悪い1日になるでしょう。風邪を引かないようにちゃんと服をきて寝ましょう。';
        } else {
            btn.textContent = '大凶'; // 5%
            result.textContent = '大凶です。この上なく縁起・運勢が悪い1日になるでしょう。もう一回ボタンを押して運勢を変えましょう。いつだって人生は自分の手で素晴らしいものに変えることができるはずです。';
        }
    });
}