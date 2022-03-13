## Blog using [newt](https://www.newt.so/) and nextjs

refer to:
 - https://github.com/Newt-Inc/newt-blog-starter-nextjs

### Step1: Newtスペースをセットアップ

1. スペースを作成します
    - スペースUIDを控えておきましょう。スペースUIDは 管理画面URL（ `https://app.newt.so/{スペースUID}` ） もしくは スペース設定 > 一般 から確認できます。
2. Appを作成します
    - Appテンプレートから作成する場合、**Blog**を選択し「このテンプレートを追加」をクリックしてください。
    - スクラッチで作成する場合は、App名とAppUIDを設定して次のステップに進みます。
    - AppUIDを控えておきましょう。AppUIDは管理画面URL（ `https://app.newt.so/{スペースUID}/app/{AppUID}` ） または App設定 > 一般 から確認できます。
3. App設定から、Articleモデル, Categoryモデル, Authorモデルを作成します
    - Appテンプレートから作成した場合、すでにモデルが作成されているためこのステップは飛ばします
    - スクラッチで作成した場合は、[Newtスペースの構成](#Newtスペースの構成)に従ってAppとモデルを作成します
4. スペース設定 > APIキー からCDN APIトークンを作成します
    - スペース設定 > APIキー よりCDN APIトークンを作成します
    - 複製マークをクリックしてトークンをコピーしましょう
### Step2: .envファイルを書き換える

1. Step1で取得したスペースUID, AppUID, CDN APIトークンで環境変数を書き換えます

.envファイルのスペースUID, AppUID, CDN APIトークンを実際の値で書き換えます
```conf
NEXT_PUBLIC_NEWT_SPACE_UID=スペースID
NEXT_PUBLIC_NEWT_APP_UID=AppUID
NEXT_PUBLIC_NEWT_API_TOKEN=CDN APIトークン
NEXT_PUBLIC_NEWT_API_TYPE=cdn
NEXT_PUBLIC_NEWT_ARTICLE_MODEL_UID=article
NEXT_PUBLIC_NEWT_CATEGORY_MODEL_UID=category
NEXT_PUBLIC_PAGE_LIMIT=12
```
Next.jsにおける環境変数の扱いについては、[公式ドキュメント](https://nextjs.org/docs/basic-features/environment-variables)を参照してください。

### Step3: devサーバーを起動する

Yarnを使う

```bash
# 依存パッケージをインストール
$ yarn install

# localhost:3000でdevサーバーを起動
$ yarn dev
```

### Step4: Staticなサイトを生成して起動

```bash
# Staticなサイトを生成（SSG）
$ yarn build

# サーバーを起動
$ yarn start
```

## License

[MIT License](https://github.com/Newt-Inc/newt-blog-starter-nextjs/blob/main/LICENSE)
