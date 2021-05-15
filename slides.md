---
theme: default
highlighter: shiki
title: 'DaaS / Dajare as a Service - #ダジャレ判定 サービスを開発、運用した話'
colorSchema: 'dark'
---

# DaaS

<hr />

## <span class="text-ritsumei">D</span>ajare <span class="text-ritsumei">a</span>s <span class="text-ritsumei">a</span> <span class="text-ritsumei">S</span>ervice

[#ダジャレ判定](https://twitter.com/search?q=%23%E3%83%80%E3%82%B8%E3%83%A3%E3%83%AC%E5%88%A4%E5%AE%9A&f=live) サービスを開発、運用した話

---

# 立命館ダジャレサークル

What's Ritsumeikan Dajare Circle?

[<carbon-link /> rits-dajare.github.io](https://rits-dajare.github.io/) / <span class="text-twitter">[<carbon-logo-twitter /> @rits_dajare](https://twitter.com/rits_dajare)</span> / [<carbon-logo-github /> @rits-dajare](https://github.com/rits-dajare)

<div class="flex">
<div class="flex-grow">

- 「面白いダジャレ」とはなにかを研究し、ダジャレを創作する団体
- 集団活動はなく、ただダジャレを発言し続ける異常団体
- 現在会員は 30 人ほど
  - アクティブな部員は少ない
  - 立命館以外の人も在籍
- 会員のダジャレは公式 Twitter アカウントへ投稿
  - これを書いている現在フォロワー 120 人

</div>

<img
  src="https://github.com/rits-dajare.png"
  alt="立命館ダジャレサークルのロゴ"
  width="1"
  height="1"
  style="width: 14rem; height: 14rem; border-radius: 1rem"
  />

</div>

---

# 作ったのは誰じゃ？

`$ whoami`

<div class="flex">
<div class="flex-grow">

## <img src="https://ygkn.github.io/img/profile.jpg" height="1732" width="1732" style="height: 1.25em; width: auto; display: inline-block; border-radius: 100%" /> やぎちゃん

- <span class="text-twitter">[<carbon-logo-twitter /> @ygkn35034](https://twitter.com/ygkn35034)</span>
- [<carbon-logo-github /> @ygkn](https://github.com/ygkn)
- 立命館ダジャレサークル会長
- Web フロントエンドが好き
  - 最近は a11y とかに興味がある

</div>

<div class="flex-grow">

## <img src="https://github.com/averak.png" height="1732" width="1732" style="height: 1.25em; width: auto; display: inline-block; border-radius: 100%" /> Averak

- <span class="text-twitter">[<carbon-logo-twitter /> @averak_jp](https://twitter.com/averak_jp)</span>
- [<carbon-logo-github /> @averak](https://github.com/averak)
- 立命館ダジャレサークル会員
- 音声処理とソフトウェア設計が好き
- お気に入りのダジャレは「ごめんな謝意」

## <img src="https://github.com/xryuseix.png" height="1732" width="1732" style="height: 1.25em; width: auto; display: inline-block; border-radius: 100%" /> xryuseix

- <span class="text-twitter">[<carbon-logo-twitter /> @ryusei_ishika](https://twitter.com/ryusei_ishika)</span>
- [<carbon-logo-github /> @xryuseix](https://github.com/xryuseix)
- 立命館ダジャレサークル会員
- 競技プログラミング, セキュリティをやります
  - SecHack365, seccamp 修了 / AtCoder 水

</div>
</div>

---

# 完全図解！ これが DaaS の全てだ！！

All of **DaaS**

<div class="flex justify-center">
<img src="/about-daas.drawio.svg"/>
</div>

---

# なぜ作ったのか

The beggining of **Ritsumeikan Dajare Circle**

<div class="text-center pt-8">

身内の間でダジャレを言い合ってたことから、<br />
**「立命館ダジャレサークル」** が爆誕

<carbon-arrow-down />

ダジャレが好きなプログラマが集まったし、<br />
ダジャレに関する何かを作ろう！

<carbon-arrow-down />

ダジャレを判定、評価するやつ作ろう！

<carbon-arrow-down />

会外にも公開しよう！

</div>

---

# ダジャレ判定・評価エンジン

Dajare judgement and evaluation engine

[<carbon-logo-github /> rits-dajare/DaaS](https://github.com/rits-dajare/DaaS)

<div class="flex">

<div class="flex-grow">

## 使用技術

- Flask - API サーバー
- Janome - 形態素解析器
- TensorFlow - 機械学習ライブラリ
- Flake8 - Linter
- autopep8 - Formatter
- mypy - 静的型検査

</div>

<div class="flex-grow">

## デプロイ

- ConoHa

</div>
</div>

---

# ダジャレの判定

Judge

TODO: 【内容】

---

# ダジャレの評価

Evaluate

TODO: 【内容】

<!--
その他何か面白いネタあれば追加してね
-->

---

# 会内向けサービス

Service to inside **Ritsumeikan Dajare Circle**

<div class="flex">
<div class="flex-grow">

[<carbon-logo-github /> rits-dajare/GASapps](https://github.com/rits-dajare/GASapps)

1. Slack でダジャレを投稿
1. 評価、判定
1. <span class="text-twitter">[<carbon-logo-twitter /> @rits_dajare](https://twitter.com/rits_dajare)</span> へ投稿、ダジャレにリアクション

<br />

## 使用技術

- Google Apps Script
- Twitter API
- Slack API

</div>

<div class="flex-shrink">
<img class="w-72" src="/kainai_slack.png"/>
<img  class="w-80 absolute bottom-4 left-72 "  src="/kainai_twitter.png"/>
</div>

</div>

---

# 自動デプロイ

Automatic Deploy

TODO: 内容

<!--
その他何か面白いネタあれば追加してね
-->

---

# 会外向けサービス

Service to outside **Ritsumeikan Dajare Circle**

[<carbon-logo-github /> rits-dajare/rits-dajare.github.io](https://github.com/rits-dajare/rits-dajare.github.io)

[https://rits-dajare.github.io/](https://rits-dajare.github.io/)

## 使用技術

- Next.js - React のフレームワーク
- Tailwind CSS - ユーティリティファーストの CSS フレームワーク
- TypeScript - JavaScript に型がついたやつ
- ESLint - Linter
- Prettier - Formatter

---

# Lighthouse

Say "I love you!" to Google.

TODO: 追加する

---

# PWA

Progressive Web App

TODO: 追加する

---

# 作って気づいたこと

- 人類なんだかんだダジャレが好き
- TODO: 追加する

---

# 今後の展望

<!-- 判定・評価エンジン、会内外向けサービス全ての今後の展望 -->

---

## 時間があまったら話すこと

- 誤判定させたい人との攻防
- SSL 対応
- TODO: 追加する

<p class="text-center">Thanks a lot for your watching! 🥩</p>

<p class="absolute bottom-0 right-0 p-8">

This slide was created with [slidev](https://sli.dev/).

</p>
