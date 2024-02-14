<div align="center">
  <img src="https://adocs.vercel.app/logo-big.svg" width="100px" height="100px" alt="adocs logo" />
  <h1>Adocs</h1>
  <p>A docs template built using <a href="https://vitepress.vuejs.org">VitePress</a></p>
  <p>This repository serves as a resource for the tutorial, <a href="https://www.freecodecamp.org/news/how-to-build-a-modern-documentation-site-with-vitepress/">How to Build a Modern Documentation Site with VitePress</a> posted on freeCodeCamp</p>
</div>

## ローカルでプロジェクトを実行

このプロジェクトをローカルで実行するには、以下のコマンドを使用してください。

```bash
git clone https://github.com/Evavic44/adocs.git

cd adocs

npm install

npm run docs:dev

npx vitepress build docs
```

サイトをご覧いただくには、[https://localhost:5173](https://localhost:5173)にアクセスしてください

## ビルド
ドキュメントをビルドするには、以下のコマンドを実行できます。

```bash
npm run docs:build
```

## フォルダー構造

```
docs/
├── .vitepress/
│   ├── config.js
│   └── theme/
│       ├── index.js
│       └── custom.css
├── public/
│   ├── logo.svg
│   └── logo-big.svg
├── about.md
├── configs.md
├── contact.md
├── get-started.md
├── guide.md
├── index.md
├── package.json
└── README.md
```