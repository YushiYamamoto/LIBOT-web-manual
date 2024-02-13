export default {
  title: "LIBOT WEBマニュアル",
  description: "LIBOT WEBマニュアルでは、LIBOTの使い方を丁寧に解説しています。ログイン方法から基本操作、便利な機能の利用方法など、LIBOTを最大限に活用するための情報が満載です。このマニュアルを参考に、LIBOTを快適に利用し、業務効率化を図っていただければ幸いです。",
  lang: 'ja',
  cleanUrls: true,
// この設定が無効になっていると、Markdownに間違ったリンクがある場合に、ビルド時に無効リンクのエラーが発生します。
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "WEBマニュアル",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      { text: "初期設定の方法", link: "/content/libot" },
      {
        // Dropdown Menu
        text: "機能紹介",
        items: [
          { text: "機能一覧", link: "/content/features/index" },
          { text: "01", link: "/content/features/01" },
        ],
      },
      { text: "ヘルプページ", link: "/content/help/index" },
      { text: "更新情報", link: "/content/updates" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "はじめに",
        collapsible: false,
        link: "/content/libot",
      },
      {
        text: "初期設定",
        collapsible: false,
        link: "/content/setup-guide",
      },
      {
        text: "トラブルシューティング",
        collapsible: false,
        link: "/content/troubleshooting",
      },
      {
        text: "更新情報",
        collapsible: false,
        link: "/content/updates",
      },
      {
        text: "導入方法",
        collapsible: true,
        items: [
          { text: "初期設定", link: "/content/installation/index" },
        ],
      },
      {
        text: "機能紹介",
        collapsible: false,
        items: [
          { text: "機能一覧", link: "/content/features/index" },
          { text: "01", link: "/content/features/01" },
        ],
      },
      {
        text: "ヘルプ",
        collapsible: true,
        items: [
          { text: "目次", link: "/content/help/index" },
          { text: "困りごとから探す", link: "/content/help/problem" },
          { text: "Q&A", link: "/content/help/QandA" },
          { text: "目的から探す", link: "/content/help/purpose" },
        ],
      },
      {
        text: "💡ガイド",
        collapsible: false,
        link: "/guide",
      },
      {
        text: "✏️マークダウン",
        collapsible: false,
        link: "/markdown",
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },
    footer: {
      message: "",
      copyright: "Copyright © 2024-AI BOT",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
