export default {
  title: "LIBOT WEBマニュアル",
  description: "LIBOT WEBマニュアルでは、LIBOTの使い方を丁寧に解説しています。ログイン方法から基本操作、便利な機能の利用方法など、LIBOTを最大限に活用するための情報が満載です。このマニュアルを参考に、LIBOTを快適に利用し、業務効率化を図っていただければ幸いです。",
  lang: 'ja',
  cleanUrls: true,
// この設定が無効になっていると、Markdownに間違ったリンクがある場合に、ビルド時に無効リンクのエラーが発生します。
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "スタッフガイド📝",
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
                placeholder: 'キーワードを入力して検索',
                translations: {
                button: {
                buttonText: 'キーワードを入力して検索',
                buttonAriaLabel: 'キーワードを入力して検索'
                },
                modal: {
                searchBox: {
                resetButtonTitle: '検索条件をリセット',
                resetButtonAriaLabel: '検索条件をリセット',
                cancelButtonText: 'キャンセル',
                cancelButtonAriaLabel: 'キャンセル'
                },
                startScreen: {
                recentSearchesTitle: '検索履歴',
                noRecentSearchesText: '検索履歴はありません',
                saveRecentSearchButtonTitle: '検索履歴に保存',
                removeRecentSearchButtonTitle: '検索履歴から削除',
                favoriteSearchesTitle: 'お気に入り',
                removeFavoriteSearchButtonTitle: 'お気に入りから削除'
                },
                errorScreen: {
                titleText: '結果を取得できません',
                helpText: 'ネットワーク接続を確認してください'
                },
                footer: {
                selectText: '選択',
                navigateText: '切り替え',
                closeText: '閉じる',
                searchByText: 'テキストを検索'
                },
                noResultsScreen: {
                noResultsText: '関連する結果が見つかりません',
                suggestedQueryText: '別のクエリを試してみてください',
                reportMissingResultsText: 'このクエリには結果があるはずですか？',
                reportMissingResultsLinkText: 'フィードバックを送信'
                }
              }
            }
          }
        }
      }
    },
    // ナビゲーションバー
    nav: [
      { text: "📖 はじめに", link: "/content/aibot" },
    ],
    // サイドバー
    sidebar: [
      { text: "📖 はじめに", link: "/content/aibot" },
      {
        text: "WEBマニュアル",collapsed: false,
        items: [
      { text: "📝 記事の更新方法", link: "/content/01-manual/更新" },
      { text: "📝 マークダウン記法ガイド", link: "/content/01-manual/markdown" },
      { text: "📝 ライティングガイド", link: "/content/01-manual/guide" },
      { text: "ℹ️ 記事サンプル", link: "/content/01-intro/" },
    ],
  },
      {
        text: "テストマニュアル",collapsed: true,
        items: [
          { text: "テスト手順", link: "/content/02-test/index" },
          { text: "バグ報告の書き方", link: "/content/02-test/index" },
          { text: "テスト記録サンプル", link: "/content/02-test/index" },
        ],
      },
    ],
    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },
    outline: {
      label: '目次'
    },
    footer: {
      message: "",
      copyright: "© 2024 AIBOT Inc. All Rights Reserved",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    langMenuLabel: '多言語',
    darkModeSwitchLabel: 'ダークモード',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    // Mobile Config only
    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
  },
};
