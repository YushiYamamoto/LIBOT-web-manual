# マークダウン記法ガイド
マークダウン(.md)の書き方。入力例のように入力すると出力結果のように表示されます。
入力欄をコピペして使ってください。

## 見出し


|入力|出力|
|-|-|
|`# 見出し1`|<h1>見出し1</h1>|  
|`## 見出し2`|<h2>見出し2</h2>|
|`### 見出し3`|<h3>見出し3</h3>|

見出しレベルは`#`の数で指定します。


## 目次

トップレベルの見出しを目次にします。

**入力**
````md
[[toc]]
````
**出力**
[[toc]]

## 強調
|入力|出力|
|-|-|
|`**bold**`|**bold**|
|`*italic*`|*italic*|
|`` `コード` ``|`コード`|

アスタリスクやバッククォートで文字を囲むと強調できます。

## 打ち消し
|入力|出力|
|-|-| 
|`~~打ち消し~~`|~~打ち消し~~|

二重チルダで文字を囲むと打ち消し線が引けます。

## リスト
箇条書きは行頭にハイフン+スペース

番号付きリストは行頭に番号+ピリオド+スペース

**入力**
````md
- リストの親項目A
    - リストの小項目１
    - リストの小項目２
- リストの親項目B
    - リストの小項目１
````

**出力**
- リストの親項目A
    - リストの小項目１
    - リストの小項目２
- リストの親項目B
    - リストの小項目１

**入力**
````md
1. 果物
   1. バナナ
   1. りんご
1. 野菜
    1. キャベツ
    1. きゅうり
1. 魚
    1. まぐろ
    1. サンマ
````

**出力**
1. 果物
   1. バナナ
   1. りんご
1. 野菜
    1. キャベツ
    1. きゅうり
1. 魚
    1. まぐろ
    1. サンマ

## 引用
行頭に`>`を追加すると引用文になります。

**入力**
````md
> 引用された本文
>> ネストされた引用です。<br> brで改行
````

**出力**
> 引用された本文
>> ネストされた引用です。<br> brで改行

## 水平線
3つ以上のハイフンで水平線を表示できます。

**入力**
````md
---
↑↑↑水平線↑↑↑
````

**出力**

---
↑↑↑水平線↑↑↑
## リンク
`[リンク名](URL)`の書式でリンクを作成できます。

**入力**

````md
[株式会社AIBOT](https://ai-bot.co.jp/)
````

**出力**

[株式会社AIBOT](https://ai-bot.co.jp/)

## 画像

`![代替テキスト](画像URL)`で画像を貼り付けられます。

**入力**
````md
![画像名](/img/aibot.png)
````

**出力**
![画像名](/img/aibot.png)

## テーブル記法
**入力**
````md
|ヘッダ1|ヘッダ2|
|-|-|
|セル1|セル2|
|セル3|セル4|
````

**出力**
|ヘッダ1|ヘッダ2|
|-|-|
|セル1|セル2|
|セル3|セル4|

表組みは上記の書式で作成できます。

## 色

|入力|出力|
|-|-|
|`<span style="color: #E0017F; ">❶</span>です。`|<span style="color: #E0017F; ">❶</span>です。|  
|`<span style="color: red; ">赤</span>です。`|<span style="color: red; ">赤</span>です。|
|`<span style="color: blue; ">青</span>です。`|<span style="color: blue; ">青</span>です。|

要素の色は色名やカラーコードで指定できます。

## カスタムコンテナ
「:::」で囲む。

**入力**
````md
::: info ボックス名
これは情報のボックスです。
:::
````

**出力**
::: info ボックス名
これは情報のボックスです。
:::

**入力**
````md
::: tip ボックス名
これはTIPSです。  
:::
````

**出力**
::: tip ボックス名
これはTIPSです。
:::  

**入力**
````md
::: warning ボックス名
これは警告です。
:::
````

**出力**
::: warning ボックス名
これは警告です。
:::


**入力**
````md
::: danger ボックス名
これは危険な警告です。
:::
````

**出力**
::: danger ボックス名
これは危険な警告です。
:::

**入力**
````md
::: details ボックス名
これは詳細ブロックです。
:::
````

**出力**
::: details ボックス名
これは詳細ブロックです。
:::

## バッジ

````md
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
````

[こちら](https://vitepress.dev/reference/default-theme-badge)のようなバッジを使うことができます。

## シンタックスハイライト

VitePressは、[Shiki](https://github.com/shikijs/shiki)によるシンタックスハイライトを提供します。行ハイライトなどの追加機能もあります。

**入力**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'ハイライトされました!' 
    }
  }
}
```
````

**出力**

```js{4}
export default {
  data () {
    return {
      msg: 'ハイライトされました!'
    }
  }  
}
```

## 参考記事
マークダウンの書き方については、以下の記事が参考になります。

- **[vitepressサンプル](https://taka1156.github.io/vitepress-sample/1_usefulmd/markdownit.html)** - vitpressのサンプルサイトです。

- **[Markdown記法 チートシート](https://qiita.com/tbpgr/items/989c6badefff69377da7)** - Markdownの基本的な記法がまとめられています

- **[Markdownで文書を作成するための10のTips](https://qiita.com/tbpgr/items/989c6badefff69377da7)** - Markdownの便利なTipsが紹介されています

- [オンラインエディタ](https://dillinger.io/) - ブラウザ上でMarkdownが編集できるオンラインエディタ

## その他

Markdownの拡張機能の全リストは、[こちらのドキュメント](https://vitepress.dev/guide/markdown)をご覧ください。


