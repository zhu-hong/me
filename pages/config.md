---
title: Config
desc: 一些配置
date: 2023-3-16 12:41
---

[[toc]]

## npm

```sh
npm config set save-exact true
npm config set save-prefix ''

NODEJS_ORG_MIRROR="https://cdn.npmmirror.com/binaries/node"
NVM_NODEJS_ORG_MIRROR="https://cdn.npmmirror.com/binaries/node"
PHANTOMJS_CDNURL="https://cdn.npmmirror.com/binaries/phantomjs"
CHROMEDRIVER_CDNURL="https://cdn.npmmirror.com/binaries/chromedriver"
OPERADRIVER_CDNURL="https://cdn.npmmirror.com/binaries/operadriver"
ELECTRON_MIRROR="https://cdn.npmmirror.com/binaries/electron/"
ELECTRON_BUILDER_BINARIES_MIRROR="https://cdn.npmmirror.com/binaries/electron-builder-binaries"
SASS_BINARY_SITE="https://cdn.npmmirror.com/binaries/node-sass"
SWC_BINARY_SITE="https://cdn.npmmirror.com/binaries/node-swc"
NWJS_URLBASE="https://cdn.npmmirror.com/binaries/nwjs/v"
PUPPETEER_DOWNLOAD_HOST="https://cdn.npmmirror.com/binaries"
PLAYWRIGHT_DOWNLOAD_HOST="https://cdn.npmmirror.com/binaries/playwright"
SENTRYCLI_CDNURL="https://cdn.npmmirror.com/binaries/sentry-cli"
SAUCECTL_INSTALL_BINARY_MIRROR="https://cdn.npmmirror.com/binaries/saucectl"
RE2_DOWNLOAD_MIRROR="https://cdn.npmmirror.com/binaries/node-re2"
RE2_DOWNLOAD_SKIP_PATH="true"
npm_config_keytar_binary_host="https://cdn.npmmirror.com/binaries/keytar"
npm_config_sharp_binary_host="https://cdn.npmmirror.com/binaries/sharp"
npm_config_sharp_libvips_binary_host="https://cdn.npmmirror.com/binaries/sharp-libvips"
npm_config_robotjs_binary_host="https://cdn.npmmirror.com/binaries/robotjs"
node_sqlite3_binary_host_mirror="https://cdn.npmmirror.com/binaries/sqlite3"
```

## VSCode

```json
{
  "update.mode": "manual",
  "editor.fontFamily": "'Fira Code','JetBrains Mono','更纱黑体 Mono SC Nerd'",
  "editor.tabSize": 2,
  "editor.fontSize": 14,
  "window.restoreWindows": "none",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "block",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "[html]": {
    "editor.language.colorizedBracketPairs": [
      ["{","}"],
    ]
  },
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell",
      "args": ["-nolog"],
    },
  },
  // updated 2023-04-04 20:35
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
    "*.asax": "$(capture).*.cs, $(capture).*.vb",
    "*.ascx": "$(capture).*.cs, $(capture).*.vb",
    "*.ashx": "$(capture).*.cs, $(capture).*.vb",
    "*.aspx": "$(capture).*.cs, $(capture).*.vb",
    "*.bloc.dart": "$(capture).event.dart, $(capture).state.dart",
    "*.c": "$(capture).h",
    "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cjs": "$(capture).cjs.map, $(capture).*.cjs, $(capture)_*.cjs",
    "*.component.ts": "$(capture).component.html, $(capture).component.spec.ts, $(capture).component.css, $(capture).component.scss, $(capture).component.sass, $(capture).component.less",
    "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cs": "$(capture).*.cs",
    "*.cshtml": "$(capture).cshtml.cs",
    "*.csproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.css": "$(capture).css.map, $(capture).*.css",
    "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.dart": "$(capture).freezed.dart, $(capture).g.dart",
    "*.ex": "$(capture).html.eex, $(capture).html.heex, $(capture).html.leex",
    "*.go": "$(capture)_test.go",
    "*.java": "$(capture).class",
    "*.js": "$(capture).js.map, $(capture).*.js, $(capture)_*.js",
    "*.jsx": "$(capture).js, $(capture).*.jsx, $(capture)_*.js, $(capture)_*.jsx",
    "*.master": "$(capture).*.cs, $(capture).*.vb",
    "*.mjs": "$(capture).mjs.map, $(capture).*.mjs, $(capture)_*.mjs",
    "*.module.ts": "$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts",
    "*.pubxml": "$(capture).pubxml.user",
    "*.resx": "$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb",
    "*.tex": "$(capture).acn, $(capture).acr, $(capture).alg, $(capture).aux, $(capture).bbl, $(capture).blg, $(capture).fdb_latexmk, $(capture).fls, $(capture).glg, $(capture).glo, $(capture).gls, $(capture).idx, $(capture).ind, $(capture).ist, $(capture).lof, $(capture).log, $(capture).lot, $(capture).out, $(capture).pdf, $(capture).synctex.gz, $(capture).toc, $(capture).xdv",
    "*.ts": "$(capture).js, $(capture).d.ts.map, $(capture).*.ts, $(capture)_*.js, $(capture)_*.ts",
    "*.tsx": "$(capture).ts, $(capture).*.tsx, $(capture)_*.ts, $(capture)_*.tsx",
    "*.vbproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.vue": "$(capture).*.ts, $(capture).*.js, $(capture).story.vue",
    "*.xaml": "$(capture).xaml.cs",
    "+layout.svelte": "+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js,+layout.gql",
    "+page.svelte": "+page.server.ts,+page.server.js,+page.ts,+page.js,+page.gql",
    ".clang-tidy": ".clang-format, .clangd, compile_commands.json",
    ".env": "*.env, .env.*, .envrc, env.d.ts",
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    ".project": ".classpath",
    "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
    "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json",
    "I*.cs": "$(capture).cs",
    "artisan": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, server.php, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, webpack.mix.js, windi.config.*",
    "astro.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "cargo.toml": ".clippy.toml, .rustfmt.toml, cargo.lock, clippy.toml, cross.toml, rust-toolchain.toml, rustfmt.toml",
    "composer.json": ".php*.cache, composer.lock, phpunit.xml*, psalm*.xml",
    "default.nix": "shell.nix",
    "deno.json*": "*.env, .env.*, .envrc, api-extractor.json, deno.lock, env.d.ts, import-map.json, import_map.json, jsconfig.*, tsconfig.*, tsdoc.*",
    "dockerfile": ".dockerignore, docker-compose.*, dockerfile*",
    "flake.nix": "flake.lock",
    "gatsby-config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, gatsby-browser.*, gatsby-node.*, gatsby-ssr.*, gatsby-transformer.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "gemfile": ".ruby-version, gemfile.lock",
    "go.mod": ".air*, go.sum",
    "go.work": "go.work.sum",
    "mix.exs": ".credo.exs, .dialyzer_ignore.exs, .formatter.exs, .iex.exs, .tool-versions, mix.lock",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, next-env.d.ts, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "package.json": ".browserslist*, .circleci*, .commitlint*, .cz-config.js, .czrc, .dlint.json, .dprint.json, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .simple-git-hooks*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json, eslint*, firebase.json, grunt*, gulp*, jenkins*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, npm-shrinkwrap.json, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-tasks.sh, release.config.*, renovate*, rollup.config.*, rspack*, simple-git-hooks*, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, xo.config.*, yarn*",
    "pubspec.yaml": ".metadata, .packages, all_lint_rules.yaml, analysis_options.yaml, build.yaml, pubspec.lock, pubspec_overrides.yaml",
    "pyproject.toml": ".pdm.toml, pdm.lock, pyproject.toml",
    "quasar.conf.js": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, quasar.extensions.json, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "readme*": "authors, backers*, changelog*, citation*, code_of_conduct*, codeowners, contributing*, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors*",
    "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, remix.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "rush.json": ".browserslist*, .circleci*, .commitlint*, .cz-config.js, .czrc, .dlint.json, .dprint.json, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .simple-git-hooks*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json, eslint*, firebase.json, grunt*, gulp*, jenkins*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, npm-shrinkwrap.json, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-tasks.sh, release.config.*, renovate*, rollup.config.*, rspack*, simple-git-hooks*, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, xo.config.*, yarn*",
    "shims.d.ts": "*.d.ts",
    "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, houdini.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, mdsvex.config.js, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vite.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  },
}
```

## windows terminal
```json
{
  
  "actions":
  [
    {
      "command":
      {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },
    {
      "command": "find",
      "keys": "ctrl+f"
    },
    {
      "command": 
      {
        "action": "closeTab"
      },
      "keys": "ctrl+w"
    }
  ],
  "copyFormatting": "none",
  "showTabsInTitlebar": true,
  "tabWidthMode": "titleLength",
  "initialRows": 20,
  "initialCols": 60,
  "initialPosition": "10,10",
}
```

## pwsh
```ps1
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"

oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/star.omp.json" | Invoke-Expression

Set-PSReadLineOption -PredictionViewStyle ListView

Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
```

## zsh

```sh
ZSH_THEME="robbyrussell"

# flutter
export PUB_HOSTED_URL="https://pub.flutter-io.cn"
export FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn"
export FLUTTER_GIT_URL="https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git"

# adb
export PATH="$PATH:/Users/wingoht/Library/Android/sdk/platform-tools"
```