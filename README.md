これは、料理投稿サイトのリプレイスリポジトリです。

## プロジェクトの立ち上げ〜起動確認まで。

1. 任意のディレクトリで以下のコマンドを1行ずつ実行してください。

```bash
git clone https://github.com/musclemuscle/demo-team-app.git
cd demo-team-app
yarn install
yarn dev
```

2. コマンドを打ち終えたら以下のリンクへアクセスしてください。

[http://localhost:3000](http://localhost:3000)

3. 表示されたら完了です。

## 使用技術

- Next.js
- Typescript
- React
- Recoil
- TailWind CSS
- Firebase hosting
- Github Actions
- その他（コードフォーマッター、静的解析など多数）

## スタイリングについて

- 本プロジェクトでは、TailWind CSSを利用している。以下のように書くことでスタイリングが可能である。

```Typescript
	return (
		<div>
			<p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">firebase fireStoreのテスト</p>
		</div>
	);

```

あとは、こちらの[TailWindドキュメント](https://tailwindcss.com/docs/installation)をみてパズルみたいにはめていけばOKです。

## ブランチ構成

- `main` ブランチ
   - リリース用ブランチ
   - ここからブランチを切ったり、このブランチに直接mergeしないこと。
- `develop` ブランチ
   - 開発用ブランチ
   - ここからブランチを切り作業していく。
   - プルリクは、このブランチに対して出すこと。

## グローバルステートの管理について

- 本プロジェクトでは、状態管理ライブラリ `recoil` を用いてグローバルステートを管理している。
   - 例えば、ログインしたユーザー情報は、`user` に格納してある。
   - 読み取りのみであれば、以下の一行を入れることで取り出すことができる。

```Typescript
const user = useRecoilValue(userState);
```

残りは[recoilのドキュメント](https://recoiljs.org/docs/api-reference/core/useRecoilValue)を確認。

## CIについて(Continuous Integration)

- 本プロジェクトでは、Github Actionsを利用したCI環境を構築している。
   - 具体的には、ブランチのpush時に `eslintrc.js` と `tsconfig.json` の設定にあっているかのチェックが行われる。


## CDについて(Continuous Delivery)

- 本プロジェクトでは、Github ActionsによるCD環境を構築している。
   - 具体的には、`main` ブランチにmergeされたら、自動的にFirebase Hostingにデプロイされるようになっています。


