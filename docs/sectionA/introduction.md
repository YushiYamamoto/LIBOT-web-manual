![banner](https://user-images.githubusercontent.com/62628408/201538130-a100889-06ae-4aad-9ea0-b77384d6bac1.png)

# VitePressを使ったモダンなドキュメントの構築方法

セクションA

::: info
ドキュメントはソフトウェア開発の重要な側面であり、開発者がしばしばメンテナンスの手間や適切なツールの選択によって軽視されることがあります。そのため、このプロセスを簡素化するツールを使用することが重要です。このチュートリアルでは、VitePressというモダンなツールを使用して、素早く完全なドキュメントサイトを構築する方法を学びます。
:::

## 定義

[VitePress](https://vitepress.vuejs.org/)は、[Vite](https://vitejs.dev)の上に構築されたシンプルで高性能な静的サイトジェネレータであり、[Vuejs](https://vuejs.org/)とViteでパワーアップされ、組み込みのカスタマイズ可能なコンポーネントが備わっています。 VitePressは、Vuejs、[Vitest](https://vitest.dev/)、[faker.js](https://fakerjs.dev/)、Vite自体など、いくつかの人気のあるドキュメントサイトをパワーアップしています。

## 前提条件

このチュートリアルに従うには、次の基本的な理解が必要です：

- [Markdown](https://daringfireball.net/projects/markdown/)の構文
- NPMとViteの基本的な理解

このチュートリアルの最後に構築するもののスクリーンショットです。

![final-works](https://user-images.githubusercontent.com/62628408/201538907-fe67b791-02c4-413c-ae3d-02635b53e20b.png)

## ステップ1：新しいプロジェクトを作成する

すでにフォルダーを作成している場合は、このステップをスキップして次のステップに進むことができます。そうでない場合は、次のコマンドを使用してプロジェクトフォルダーを作成し、そのフォルダーに移動します。

```bash
mkdir プロジェクト名
cd プロジェクト名
```

次に、お好みのパッケージマネージャーで初期化する必要があります。このガイドの残りの部分ではNPMを使用します。

```bash
npm init
// または、すべての質問をスキップしたい場合は、次のコマンドを使用します
npm init -y
```

最初のコマンドを使用した場合、特定の質問が表示されますので、適切に完了してください。操作が成功した後、ルートディレクトリにpackage.jsonファイルがあるはずです。ここにVitePressのdev依存関係がインストールされます。

## ステップ2：VitePressのインストール

次のステップは、VitePressとVueをプロジェクトのdev依存関係として追加することです。

```bash
npm install vue vitepress --save-dev
// または
npm install -D vue vitepress
```

VitePressとVueが正常にインストールされ、dev依存関係として追加されました。これで、各自のドキュメントファイルを作成できるようになりましたが、その前にVitePressの動作方法を説明することが重要だと思います。

## VitePressの動作原理

VitePressはMarkdown `.md`ファイルを使用してマークアップを行いますが、これは自動的に静的HTMLに変換されます。これを実現するために、ルートディレクトリに `docs` という特別なフォルダーが作成されます。

このフォルダーは、NextJSの `pages` フォルダーと同様の動作をします。ディレクトリ内に作成された任意の `.js` ファイルは、自動的にウェブページとして扱われます。この場合、`index.md` というファイルは `index.html` として扱われ、ドキュメントテンプレートのルートとして機能します。

これで、動作が理解できたので、各自のドキュメントファイルを作成できるようになりました。

## ステップ3：各自のファイルを作成する

ドキュメントフォルダーとindex.mdファイルを手動で作成するか、ターミナルを使用して以下のコマンドを使用して作成できます。

```bash
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

このコマンドは、単にdocsという名前のフォルダーを作成し、その中に 'Hello World' というh1要素を含むindex.mdファイルを追加しています。

![create respective files](https://user-images.githubusercontent.com/62628408/201539157-0b662a53-4aad-4ce5-b22c-228aa618d7b8.png)

これで、これまでに作成された内容を確認するために開発環境を起動できます。

## ステップ4：開発環境を起動する

ローカルでドキュメントを実行するには、package.jsonファイルに以下のスクリプトを追加する必要があります。以下のコードをコピーして、"scripts"オブジェクトでそれらを置き換えます。

```json
// package.json
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
}
```

最後に、以下のコマンドを実行してローカルサーバー上でドキュメントサイトを提供できます。

```bash
npm run docs:dev
```

これにより、`http://localhost:5173`でホットリロードの開発サーバーが起動し、ドキュメントサイトを表示できます。

### 出力

![boot-dev-server](https://user-images.githubusercontent.com/62628408/201539308-bfc07160-bac2-4e91-ae90-46f9f3acd3cc.png)

マークアップを追加するだけで、VitePressが見た目を処理しました。次のセッションでは、必要に応じてドキュメントをカスタマイズする方法について学びます。

## ドキュメントのカスタマイズ方法

まず最初に、先ほど作成した`docs`ディレクトリ内に`.vitepress`フォルダーを作成します。これは、すべてのVitePress固有のファイルが配置される場所です。この新しいディレクトリ内に、`config.js`ファイルが必要です。再び、ハッカーのようにターミナルコマンドを使用できます。

```bash
mkdir .vitepress && touch .vitepress/config.js
```

この設定ファイルをテストするには、まずドキュメントサイトのメタタイトルと説明を変更してみることから始めましょう。以下のマークアップをコピーして、`config.js`ファイルに貼り付けます。

```js
// .vitepress/config.js
export default {
  title: "Adocs",
  description: "私が作成した素晴らしいドキュメントテンプレート",
};
```

デベロッパーツールをチェックすると、メタタイトルと説明が変更されていることがわかります。

![title-and-description](https://user-images.githubusercontent.com/62628408/201539383-8b05db4c-dc00-4919-8bbc-f29cc77b2a00.png)

## タイトルとロゴ

ロゴタイトルを変更し、イメージを追加するには、同じ`config.js`ファイル内の`themeConfig`オブジェクトに以下のマークアップを貼り付けます。これにより、現在のタイトルが上書きされ、ドキュメントサイトにロゴが追加されます。

```js
// config.js
export default {
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Adocs",
  },
};
```

画像ソースには、画像URLを渡すか、ローカル画像へのパスを指定します。ローカルで行う場合は、画像を `public` ディレクトリ内に配置してください。

### 出力

![logo-and-title](https://user-images.githubusercontent.com/62628408/201539442-123b92cc-3c59-423d-a183-280ab8eb23be.png)

::: warning
注意：`public`ディレクトリ内のファイルは、ルートパスで提供されます。
そのため、`../public/logo.svg`の代わりに`/logo.svg`を使用してください。
:::

## ナビゲーションバー

`Navbar`のカスタマイズは非常に簡単です。`themeConfig`ファイル内に、次のマークアップを貼り付けます。ここでは、アンカーテキスト `text` とパス `link` を定義したオブジェクトを持っています。

```js
// .vitepress/config.js
{
  // ...
   nav: [
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    { text: "Guide", link: "/guide" },
    { text: "Configs", link: "/configs" },
    { text: "Changelog", link: "https://github.com/Evavic44" },
  ],
  // ...
}
```

基本的には、`http://localhost:5173/about` に移動すると、aboutページに移動するはずです（まだ作成していませんが）。

### 出力

![navbar](https://user-images.githubusercontent.com/62628408/201539594-8e8f1d80-19dc-4335-b82b-fee5a23a5d30.png)

ナビゲーションリンクは、ドロップダウンメニューにすることもできます。これを追加するには、リンクのプロパティの代わりにアイテムオブジェクトを使用します。これには、リンクの配列が含まれます。

```js
// .vitepress/config.js
{
  text: "Changelog",
  items: [
   { text: "v0.0.1", link: "/item-1" },
   { text: "v0.0.2", link: "/item-2" },
   { text: "v0.0.3", link: "/item-3" },
  ],
},
```

これで、changelogがそれぞれのリンクを内部に持つドロップダウンメニューになります。

### 出力

![dropdown-menu](ーカルでドキュメントを実行するには、package.jsonファイルに以下のスクリプトを追加する必要があります。以下のコードをコピーして、"scripts"オブジェクトでそれらを置き換えます。

```json
// package.json
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
}
```

最後に、以下のコマンドを実行してローカルサーバー上でドキュメントサイトを提供できます。

```bash
npm run docs:dev
```

これにより、`http://localhost:5173`でホットリロードの開発サーバーが起動し、ドキュメントサイトを表示できます。

### 出力

![boot-dev-server](https://user-images.githubusercontent.com/62628408/201539308-bfc07160-bac2-4e91-ae90-46f9f3acd3cc.png)

マークアップを追加するだけで、VitePressが見た目を処理しました。次のセッションでは、必要に応じてドキュメントをカスタマイズする方法について学びます。

## ドキュメントのカスタマイズ方法

まず最初に、先ほど作成した`docs`ディレクトリ内に`.vitepress`フォルダーを作成します。これは、すべてのVitePress固有のファイルが配置される場所です。この新しいディレクトリ内に、`config.js`ファイルが必要です。再び、ハッカーのようにターミナルコマンドを使用できます。

```bash
mkdir .vitepress && touch .vitepress/config.js
```

この設定ファイルをテストするには、まずドキュメントサイトのメタタイトルと説明を変更してみることから始めましょう。以下のマークアップをコピーして、`config.js`ファイルに貼り付けます。

```js
// .vitepress/config.js
export default {
  title: "Adocs",
  description: "私が作成した素晴らしいドキュメントテンプレート",
};
```

デベロッパーツールをチェックすると、メタタイトルと説明が変更されていることがわかります。

![title-and-description](https://user-images.githubusercontent.com/62628408/201539383-8b05db4c-dc00-4919-8bbc-f29cc77b2a00.png)

## タイトルとロゴ

ロゴタイトルを変更し、イメージを追加するには、同じ`config.js`ファイル内の`themeConfig`オブジェクトに以下のマークアップを貼り付けます。これにより、現在のタイトルが上書きされ、ドキュメントサイトにロゴが追加されます。

```js
// config.js
export default {
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Adocs",
  },
};
```

画像ソースには、画像URLを渡すか、ローカル画像へのパスを指定します。ローカルで行う場合は、画像を `public` ディレクトリ内に配置してください。

### 出力

![logo-and-title](https://user-images.githubusercontent.com/62628408/201539442-123b92cc-3c59-423d-a183-280ab8eb23be.png)

::: warning
注意：`public`ディレクトリ内のファイルは、ルートパスで提供されます。
そのため、`../public/logo.svg`の代わりに`/logo.svg`を使用してください。
:::

## ナビゲーションバー

`Navbar`のカスタマイズは非常に簡単です。`themeConfig`ファイル内に、次のマークアップを貼り付けます。ここでは、アンカーテキスト `text` とパス `link` を定義したオブジェクトを持っています。

```js
// .vitepress/config.js
{
  // ...
   nav: [
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    { text: "Guide", link: "/guide" },
    { text: "Configs", link: "/configs" },
    { text: "Changelog", link: "https://github.com/Evavic44" },
  ],
  // ...
}
```

基本的には、`http://localhost:5173/about` に移動すると、aboutページに移動するはずです（まだ作成していませんが）。

### 出力

![navbar](https://user-images.githubusercontent.com/62628408/201539594-8e8f1d80-19dc-4335-b82b-fee5a23a5d30.png)

ナビゲーションリンクは、ドロップダウンメニューにすることもできます。これを追加するには、リンクのプロパティの代わりにアイテムオブジェクトを使用します。これには、リンクの配列が含まれます。

```js
// .vitepress/config.js
{
  text: "Changelog",
  items: [
   { text: "v0.0.1", link: "/item-1" },
   { text: "v0.0.2", link: "/item-2" },
   { text: "v0.0.3", link: "/item-3" },
  ],
},
```

これで、changelogがそれぞれのリンクを内部に持つドロップダウンメニューになります。

### 出力

![dropdown-menu](

https://user-images.githubusercontent.com/62628408/201539734-5072b7f7-7dfb-44a8-bba8-07d55a6785a7.png)

これで、VitePressでモダンなドキュメントを構築する方法を学びました。ドキュメントは、プロジェクトの成長と利用者の増加にともなって、常に重要な役割を果たします。VitePressを使用すると、ドキュメント作成プロセスを簡素化し、開発者がより効果的にコミュニケーションを行うのに役立ちます。

## サイドバー

VitePressには、サイドバーメニューなどの組み込みコンポーネントも付属しています。サイドバーを追加するには、サイドバーというオブジェクトを作成し、その内部に、ネストされたタイトル、折りたたみ機能（デフォルトはtrueに設定）、およびネストされたリンクを取るネストされたオブジェクトを追加します。

```js
// .vitepress/config.js
sidebar: [
    {
      text: "セクションA",
      collapsible: true,
      items: [
        { text: "はじめに", link: "/introduction" },
        { text: "入門", link: "/getting-started" },
      ],
    },
    {
      text: "セクションB",
      collapsible: false,
      items: [
        { text: "はじめに", link: "/introduction" },
        { text: "入門", link: "/getting-started" },
      ],
    },
    {
      text: "セクションC",
      collapsible: true,
      items: [
        { text: "はじめに", link: "/introduction" },
        { text: "入門", link: "/getting-started" },
      ],
    },
  ],
```

サイドバーオブジェクトにcollapsible: "true"を追加することで、各セクションを表示/非表示するトグルボタンが表示されます。セクションはいくつでも作成できます。

### 出力

![sidebar-2](https://user-images.githubusercontent.com/62628408/201539859-92dffaf2-8886-4b11-86de-dd4847632536.png)

セクションBは折りたたみ不可であり、ページの下部に見栄えの良い次のページボタンが表示されます。

## ページルーティング

先ほど説明したように、VitePressは、docsディレクトリのルート内のすべての`.md`ファイルを静的HTMLに自動変換し、アドレスバーでアクセスできるようにします。たとえば、`index.md`は`index.html`に、`about.md`は`about.html`などに変換されます。

ナビゲーションリンクを作成し、それらをそれぞれのURLに指定したので、これらのページに簡単にアクセスできます。

```
docs/
├── .vitepress/
│   └── config.js
├── public/
│   └── logo.svg
├── about.md
├── contact.md
├── guide.md
├── configs.md
└── get-started.md
```

これらのファイルをdocsフォルダ内に作成し、単純なマークアップを追加して、これがどのように機能するかを見てみましょう。このページは基本的なMarkdownなので、リンク、コードブロック、見出しなど、すべてのMarkdown構文がここで機能します。

テスト目的で、このMarkdownコンテンツをコピーして、作成した`.md`ファイルのいずれかに貼り付けてください。

```md
# About

Aboutページへようこそ。

このMarkdownは、インラインスタイルを備えた `p` タグなどのHTML要素をサポートしています。

<p style="color: #ff7340; border: 1px solid rgba(255, 135, 23, 0.25); border-radius:5px; padding: 1rem;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

シンタックスハイライト付きの風刺コードスニペットもサポートされています。😅

const lang = prompt("What is your favorite programming language?");

(lang === "JavaScript") | (lang === "javascript") | (lang === "js")
? alert("JavaScript to the world! 🚀🟡")
: alert(`We don't permit such languages here 💩`);

当然、画像も含まれています。

<img src="/logo.svg" alt="adocs logo">
```

### 出力

![page-routing](https://user-images.githubusercontent.com/62628408/201539985-9308aaff-e98b-44e0-ad48-e990e788fd12.gif)

素晴らしいですね！ドキュメントをセットアップし、ドロップダウン機能付きのナビゲーションメニューを追加し、サイドバーを追加し、リンクをカスタマイズして、異なるページに移動できるようにしました。次は、ホームページの作成に取り組みましょう。

## ヒーローセクション

最初に、ヒーローセクションから始めます。 `index.md` ページのHello Worldテキストを次のマークアップで置き換えます。

```bash
# docs/index.md
---
layout: home

hero:
  name: Adocs
  text: VitePressで構築された静的ドキュメントテンプレート。
  image:
    src: /logo-big.svg
    alt: Adocsロゴ
  tagline: プロジェクトのドキュメントを作成するための無料テンプレート
  actions:
    - theme: brand
      text: 開始する
      link: /get-started
    - theme: alt
      text: GitHubで見る
      link: https://github.com/evavic44/adocs-template
---
```

## 機能セクション

さらに、ヒーローセクションの後に機能セクションを追加することもできます。 単に、次のコードをヒーローオブジェクトの下に貼り付けます。

```bash
# /docs/index.md
---
link: https://github.com/evavic44/adocs-template

features:
  - icon: ⚡️
    title: Adocs、DXの最高峰
    details: Lorem ipsum...
  - icon: 🎉
    title: VueのパワーとMarkdownの出会い
    details: Lorem ipsum...
  - icon: 🔥
    title: シンプルで最小限、常に
    details: Lorem ipsum...
  - icon: 🎀
    title: おしゃれでクール
    details: Lorem ipsum...
---
```

### 出力

![hero-redesign](https://user-images.githubusercontent.com/62628408/201540116-6546ba1f-dc43-4490-a6e5-b513eaf3ced6.png)

## フッター

ページの下部にフッターメッセージを追加することもできますが、これはホームページでのみ表示されます。

::: warning
サイドバーが表示されている場合、フッターは表示されません。
フッターコンポーネントを追加するには、 `config.jsファイル` に移動し、マークアップを `themeConfig` オブジェクト内に貼り付けます。
:::

```js
// .vitepress/config.js
 footer: {
   message: "MITライセンスでリリースされています。",
   copyright: "著作権 © 2022-present Adocs",
 },
```

### 出力

![footer](https://user-images.githubusercontent.com/62628408/201540337-4472a86e-f5cd-42d4-b40d-da1199148d2d.png)

マークアップ以外にも、カスタムCSSを使用してフォントファミリー、カラー、レイアウトなどを変更することでコンポーネントをカスタマイズできます。

## カスタムCSS

デフォルトのテーマCSSは、ルートレベルのCSS変数をオーバーライドしてカスタマイズされます。 必要に応じて、[css variables customizable](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css) の完全なリストを確認できます。

開始するには、`.vitepress/theme` ディレクトリを作成し、このテーマフォルダー内に `index.js` と `custom.css` ファイルを追加します。 これまでに従っていた場合、次のターミナルコマンドを使用してこれをすばやく行うことができます。

```bash
mkdir docs/.vitepress/theme && touch docs/.vitepress/theme/index.js && touch docs/.vitepress/theme/custom.css
```

ターミナルコマンドで問題が発生した場合は、ファイルを手動で作成して次のステップに進んでください。

以下は、フォルダー構造の概要です。

```bash
docs/
├── .vitepress/
│   ├── config.js
│   └── theme/
│       ├── index.js
│       └── custom.css
├── public/
│   └── logo.svg
├── about.md
├── contact.md
├── guide.md
├── configs.md
└── get-started.md
```

これらのファイルを作成した後、 `.vitepress/theme/index.js` ファイル内に、インポートコマンドを貼り付けます。

```js
// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default DefaultTheme;
```

### カラーテーマ

カラーはCSS変数で制御されています。 好きな色に置き換えるだけです。

::: tip
このカラーは、ライトモードとダークモードの両方に対応しています。 したがって、それに応じて変更してください。
:::

以下は、カスタムカラーの例です。

```css
/* .vitepress/theme/custom.css */

:root {
  --vp-c-brand: rgb(255, 115, 64);
  --vp-c-brand-light: rgb(255, 87, 25);
  --vp-c-brand-lighter: rgb(255, 115, 64);
  --vp-c-brand-dark: #ff622d;
  --vp-c-brand-darker: rgb(226, 60, 0);

  --vp-c-sponsor: #fd1d7c;
}
```

効果がすぐに表示されない場合は、サーバーを終了して再起動してみてください。

カラーテーマ以外にも、フォントファミリー、タイポグラフィ

、レイアウト、ブレークポイントなど、フォントを変更する方法もオーバーライドできます。

## フォント

[Google fonts](https://fonts.google.com/) をCSSファイルにインポートして、デフォルトのフォントファミリーを上書きできます。

```css
@import url(https://fonts.googleapis.com/css?family=Space+Mono:regular,italic,700,700italic);
@import url(https://fonts.googleapis.com/css?family=Space+Grotesk:regular,italic,700,700italic);

:root {
  --vp-c-brand: #ff7340;
  --vp-c-brand-light: #ff5719;
  --vp-c-brand-lighter: #ff7340;
  --vp-c-brand-lighter: rgba(255, 135, 23, 0.25);
  --vp-c-brand-dark: #ff622d;
  --vp-c-brand-darker: #e23c00;

  --vp-c-sponsor: #fd1d7c;

  /* Typography */
  --vp-font-family-base: "Space Grotesk", "Inter var experimental", "Inter var",
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  /* Code Snippet font */
  --vp-font-family-mono: "Space Mono", Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

`--vp-font-family-base` 変数を使用してメインフォント、`--vp-font-family-mono` を使用してコードスニペット用のフォントを変更できます。

### 出力

![banner](https://user-images.githubusercontent.com/62628408/201538130-a100889-06ae-4aad-9ea0-b77384d6bac1.png)

CSSを使用してテーマをカスタマイズし、フォントファミリーを変更しました。 スタイリングに関しては他にもできることがありますが、この段階では、どのようにしてCSSでドキュメントをカスタマイズできるかが明確になったと思います。 次は、ホスティングについて議論しましょう。

## ホスティング

ドキュメントサイトの作成が完了したら、[Netlify](https://netlify.com/)、[Vercel](https://vercel.com)、[AWS Amplify](https://aws.amazon.com/amplify/)などの異なるプラットフォームに公開またはホストできます。

まず、ビルドコマンドを実行します。

```bash
npm run docs:build
```

これにより、すべてのドキュメントの静的ファイルを含む新しい `dist` フォルダーが作成されます。 ホスティングサービスでは、これらのコマンドを対応するフィールドに追加します。
ビルドコマンド: `npm run docs:build`
出力ディレクトリ: `docs/.vitepress/dist`

![deploy-settings-vercel](https://user-images.githubusercontent.com/62628408/201540859-095ea3c0-5d97-4eb4-98a5-2601149d96ed.png)

設定を編集してから、保存してデプロイします。

## 結論

このチュートリアルでは、VitePressを使用してフル機能のドキュメントサイトをセットアップし、CSSとVitePressの組み込みコンポーネントをカスタマイズしました。 ただし、このチュートリアルはVitePressで可能なことの一部に過ぎません。 もっと学びたい場合は、VitePressのドキュメントを確認してください。

## リソース

- [ライブデモ](https://adocs.vercel.app)
- [GitHubリポジトリ](https://github.com/Evavic44/adocs)

<hr>

このような素晴らしいプロジェクトに興味を持っている場合は、私のソーシャルメディアをフォローして、次の投稿を見逃さないようにしてください。 乾杯。 🍷

[GitHub](https://github.com/evavic44) [Twitter](https://twitter/.com/victorekea) [ブログ](https://eke.hashnode.dev) [ポートフォリオ](https://victoreke.com)