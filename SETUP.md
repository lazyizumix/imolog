# 環境構築

## 前提

- node: v24.4.1
- npm: v11.4.2

## Svelteプロジェクトの作成

```zsh
npx sv create .
```

- Which template would you like?
  - SvelteKit minimal
    - SvelteKitの最小構成
- Add type checking with TypeScript?
  - Yes, using TypeScript syntax
    - TypeScriptを利用する
- What would you like to add to your project?
  - prettier, eslint, tailwindcss, mdsvex
    - プロジェクトに追加するモジュール
- tailwindcss: Which plugins would you like to add?
  - typography
    - tailwindcssのモジュール
- Which package manager do you want to install dependencies with?
  - npm
    - 安定稼働重視の選択
