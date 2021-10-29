# ACross Documention & Wiki

[![Build and deploy GH Pages](https://github.com/ArkToria/arktoria.github.io/actions/workflows/gh_page.yaml/badge.svg)](https://github.com/ArkToria/arktoria.github.io/actions/workflows/gh_page.yaml)

## Edit required environments
- [zola](https://github.com/getzola/zola)
- [git](https://github.com/git/git)

## Initialization steps

### Synchronize git submodules

```shell
$ git clone --recurse-submodules git@github.com:ArkToria/arktoria.github.io.git
```

### Local editing and preview
```shell
$ cd ./arktoria.github.io
$ zola serve
Building site...
Checking all internal links with anchors.
> Successfully checked 0 internal link(s) with anchors.
-> Creating 1 pages (0 orphan), 3 sections, and processing 0 images
Done in 1.3s.

Listening for changes in ./arktoria.github.io/config.toml, content, sass, static, themes}
Press Ctrl+C to stop

Web server is available at http://127.0.0.1:1111
```

## Publish
The github action will automatically built from the `main` branch to the `gh-page` branch and finally published on our website [arktoria.github.io](https://arktoria.github.io/).