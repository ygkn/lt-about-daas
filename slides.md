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

- <span class="text-twitter">[<carbon-logo-twitter /> @ygkn35034](https://twitter.com/ygkn35034)</span> / [<carbon-logo-github /> @ygkn](https://github.com/ygkn)
- 立命館ダジャレサークル会長
- Web フロントエンドが好き
  - 最近は a11y とかに興味がある

</div>

<div class="flex-grow">

## <img src="https://github.com/averak.png" height="1732" width="1732" style="height: 1.25em; width: auto; display: inline-block; border-radius: 100%" /> Averak

- <span class="text-twitter">[<carbon-logo-twitter /> @averak_jp](https://twitter.com/averak_jp)</span> / [<carbon-logo-github /> @averak](https://github.com/averak)
- 立命館ダジャレサークル会員
- 音声処理とソフトウェア設計が好き
- お気に入りのダジャレは「ごめんな謝意」

## <img src="https://github.com/xryuseix.png" height="1732" width="1732" style="height: 1.25em; width: auto; display: inline-block; border-radius: 100%" /> xryuseix

- <span class="text-twitter">[<carbon-logo-twitter /> @ryusei_ishika](https://twitter.com/ryusei_ishika)</span> / [<carbon-logo-github /> @xryuseix](https://github.com/xryuseix)
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

<div class="flex">
<div class="flex-grow">

[<carbon-logo-github /> rits-dajare/DaaS](https://github.com/rits-dajare/DaaS)

ダジャレかどうかを判定し、0 ~ 5 の点数で評価する

## 使用技術

- Flask - API サーバー
- Janome - 形態素解析器
- TensorFlow - 機械学習ライブラリ
- Flake8 - Linter
- autopep8 - Formatter
- mypy - 静的型検査

など

</div>

<div class="flex-grow flex flex-col">

<img src="/ai_search.png" class="h-40 object-contain" />

<p class="text-center">ダジャレを審議中の AI <br /> （審議ュラリティ）</p>

<img src="/ai_pet_family.png" class="h-40 object-contain mt-4" />

</div>
</div>

---

# ダジャレの判定

Judge

ルールの一例: 前処理でノイズの削除、カタカナに変換し、 n-gram で重複する要素があればダジャレと判定

![](/judgement.drawio.svg)

その他母音/子音の一致、文字の入れ替え、音便などを考慮し人間の思う「ダジャレ」に近づけている

---

# ダジャレの判定

Judge

現在の判定精度は

<p class="p-32 text-ritsumei text-6xl text-center">91.5% !!</p>

<p class="text-right">しかし、ダジャレかどうか微妙なものに引っかかりがち……。</p>

---

# ダジャレの評価

Evaluate

[ダジャレステーション](https://dajare.jp/) から取得したダジャレ 64,737 件を教師データとして、
TensorFlow で Character Level CNN （単語ではなく、文字レベルで学習）し、評価していた。

<span class="text-3xl">が、</span>
教師データの評価値（1 ~ 5 点）のデータがでーたらめ（エンジン開発者談）だったため、
人間の感覚と乖離した。🥺

点数を正規分布に従わせるため、今はほぼランダムな値となっている。

---

# 会内向けサービス

Service to inside **Ritsumeikan Dajare Circle**

<div class="flex">
<div class="flex-grow">

[<carbon-logo-github /> rits-dajare/GASapps](https://github.com/rits-dajare/GASapps)

1. Slack でダジャレを投稿
1. 評価、判定
1. <span class="text-twitter">[<carbon-logo-twitter /> @rits_dajare](https://twitter.com/rits_dajare)</span> へツイート、Slack の投稿にリアクション

## 使用技術

- Google Apps Script
- Slack API - Slack の投稿を取得したり、リアクションしたり
- Twitter API - ダジャレを世に放つ
- Clasp - GAS の CLI 管理ツール

など

</div>

<div class="flex-shrink">
<img class="w-52" src="/kainai_slack.png" />
<img  class="w-80 absolute bottom-1 right-40"  src="/kainai_twitter.png"/>
</div>

</div>

---

# 自動デプロイ

Automatic Deploy

GitHub Actions と Clasp を使用し、自動デプロイを実装した。

しかし、現在は GitHub Actions の Workflow 終了後、API の反映を GAS エディタでする必要があるなど不完全。

---

# 会外向けサービス

Service to outside **Ritsumeikan Dajare Circle**

[<carbon-logo-github /> rits-dajare/rits-dajare.github.io](https://github.com/rits-dajare/rits-dajare.github.io)

[https://rits-dajare.github.io/](https://rits-dajare.github.io/)

ダジャレサークルの紹介、判定サービス

## 使用技術

- Next.js - React のフレームワーク
- Tailwind CSS - Utility-fist な CSS フレームワーク
- TypeScript - JavaScript に型がついたやつ
- React Query - React でいい感じに fetch できるくん
- zod - ランタイムでの型チェックライブラリ

など

<img src="/website.png" class="h-140 w-auto absolute top-0 right-0" />

---

<img src="/lighthouse.png" class="w-full h-full object-contain" />

---

# PWA

Progressive Web App

<div class="flex gap-4">
<div class="flex-grow">

- インストールできる！
  - 最近インストールする UI がかっこよくなった
- ショートカットでダジャレ判定へ

Tip: Twitter の `manifest.json` が参考になる！

</div>
<img src="/pwa-install.png" class="w-48" />
<img src="/pwa-shortcut.png" class="w-48 object-contain object-top" />
</div>

---

# 他にもいろいろ

...and more!

<div class="flex h-full w-full gap-8">

<div class="flex-grow">

アクセシビリティも、ダークモードも。

「生意気にもダークモードに対応してやがる」との嬉しいお声も

お気づきの点があれば Issue、PR 待ってます！

</div>
<img src="/dark-mode.png" class="w-52 object-contain object-top" />
<img src="/a11y.png" class="w-52 object-contain object-top" />
</div>

---

# 作って気づいたこと

Awareness

## 人類なんだかんだダジャレが好き

普段ダジャレを言わない人もサービスを公開してから投稿することがあった。

ダジャレ判定はダジャレを発言する場を作っているのでは？

<carbon-arrow-right /> どんな小さなサービスでも人の行動を変えることもあることを再認識

---

# 今後の課題

- 判定・評価エンジン
  - 判定・評価 API レスポンスの高速化
  - 判定、評価の高精度化
    - より人間の感覚に近づける
- 会内向けサービス
  - 開発者体験の向上
    - 完全自動デプロイの実装
    - TypeScript を導入
- 会外向けサービス
  - OGP 画像生成
  - グラフィックの向上

<p class="text-center">Thanks a lot for your watching! 🥩</p>

<p class="absolute bottom-0 right-0 px-8">

This slide was created with [slidev](https://sli.dev/).

</p>
