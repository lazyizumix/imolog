# テックブログメモ

## 工程表

フェーズ0：環境構築（SvelteKit最小）

目的: ローカルでSvelteKitを起動
やること: sv create → TS/ESLint/Prettier/Tailwind/mdsvex を選択
Done条件: npm run dev で初期ページ表示
成果物: 初期コミット（README雛形）

⸻

フェーズ1：Markdown基盤（mdsvex＋ハイライト）

目的: .md をレンダリングできる状態
やること:
Markdown基盤（mdsvex＋Shikiハイライト）

1. mdsvex設定
   • .md を Svelteコンポーネントとして扱えるようにする
   • rehype-pretty-code（Shiki）でシンタックスハイライト
2. Markdown記事作成
   • src/lib/posts/hello-world.md
   → frontmatter付き（title, date, description, tags, draft）
   • 見出しとコードブロックを含める
3. 仮ルートで記事表示
   • routes/test-md/+page.svelte を作り、記事を読み込んで表示
4. ブラウザで表示確認
   • frontmatter情報が取得できる
   • コードブロックがハイライトされている
   Done条件: 仮ルートで本文とコードが表示
   成果物: 記事1本＋スタイル最小

⸻

フェーズ2：記事管理（一覧・メタ）

目的: import.meta.glob で記事収集・並び替え
やること: draft 除外、date 降順、一覧ページ実装
Done条件: トップに記事リスト、クリックで詳細へ遷移（仮）
成果物: 記事カード（タイトル/日付/タグ/説明）

⸻

フェーズ3：記事ページ & SEO

目的: /blog/[slug] 動的ルート＋メタ設定
やること: 404処理、<svelte:head> に title/description/OGP
Done条件: 個別記事がメタ付きで表示
成果物: 本番運用可能な記事ページ

⸻

フェーズ4：検索機能 & 開発用可視化（devtools-json）

目的: クライアント検索＋開発中のデータ可視化
やること: minisearch 等でビルド時インデックス化、検索UI、
dev限定で devtools-json によるインデックス/結果の整形表示（本番はバンドル除外）
Done条件: 検索が機能し、ヒット件数/ハイライト確認
成果物: 検索フォーム、検索結果一覧、開発可視化スイッチ

⸻

フェーズ5：UI機能強化 & Storybook導入

目的: 再利用可能なUIコンポーネント群を整備
やること:
• コンポーネント化：SearchBox、TagBadge、PostCard、Pagination
• Storybook 導入（ライト/ダーク、SP/PCの各バリエーション）、Controls/Docs整備
Done条件: Storybookで状態別の見た目を即確認、デザイン差分レビュー可能
成果物: stories 一式、UIガイド、テーマトークン方針

⸻

フェーズ5.5：国際化（paraglide導入）

目的: ブログの多言語（i18n）対応を可能にする
やること:
• 翻訳ファイル作成（例: locales/en.json、locales/ja.json）
• 言語切替UIの追加
• ロケール別ルーティング設定（例: /en/blog、/ja/blog）
• title/description等のメタ情報の多言語対応
Done条件: 言語切替でUIとメタ情報が変わる
成果物: 翻訳ファイル群、国際化対応済みUI

⸻

フェーズ6：配信形態確定（adapter-static）& 静的ビルド

目的: マルチクラウド対応のベースを確立
やること: @sveltejs/adapter-static 導入、prerender=true、必要なら paths.base 設定
Done条件: build/ に静的ファイル出力、preview で動作OK
成果物: ポータブルな静的成果物

⸻

フェーズ7：デプロイ（Cloudflare Pages）& 基本運用

目的: 公開と基本設定
やること: Pages 連携、/\_headers・/\_redirects、カスタムドメイン、Analytics
Done条件: 公開URLでトップ/記事/検索が稼働
成果物: 本番URL、運用チェックリスト

⸻

フェーズ8：IaC & マルチクラウド展開

目的: 再現性と拡張性の担保
やること:
• Terraform（Cloudflare）：DNS/SSL/WAF/Pages
• CI/CD：GitHub Actions で build アーティファクトを CF Pages / S3+CloudFront / Azure SWA へ配布（matrix対応）
Done条件: terraform apply で環境再現、CI で複数宛先にデプロイ
成果物: infra/（tfコード）、.github/workflows/（YAML）

⸻

フェーズ9：仕上げ（ポートフォリオ化）

目的: 面接で刺さる形に整備
やること: README（構成図・決定理由・運用/失敗談）、機能別記事、Storybook公開（optional）
Done条件: リポジトリとデモURLだけで実力が伝わる
成果物: ポートフォリオ一式

⸻

補足（導入タイミングまとめ）
• devtools-json：フェーズ4（検索実装時／開発専用）
• Storybook：フェーズ5（UIコンポーネント増加後）
• paraglide：フェーズ5.5（国際化対応）
• adapter-static：フェーズ6（マルチクラウド基盤）
• Terraform：フェーズ8（IaC化）
