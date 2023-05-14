# Aurum Documention & Wiki

[![Build and deploy GH Pages](https://github.com/Shadowsocks-NET/Aurum-Docs/actions/workflows/gh_page.yaml/badge.svg)](https://github.com/Shadowsocks-NET/Aurum-Docs/actions/workflows/gh_page.yaml)

## Edit required environments
- [zola](https://github.com/getzola/zola)
- [git](https://github.com/git/git)

## Initialization steps

### Synchronize git submodules

```shell
$ git clone --recurse-submodules https://github.com/Shadowsokcs-NET/Aurum-Docs.git
```

### Local editing and preview
```shell
$ cd ./Aurum-Docs
$ zola serve
Building site...
Checking all internal links with anchors.
> Successfully checked 0 internal link(s) with anchors.
-> Creating 1 pages (0 orphan), 3 sections, and processing 0 images
Done in 1.3s.

Listening for changes in ./Aurum-Docs/config.toml, content, sass, static, themes}
Press Ctrl+C to stop

Web server is available at http://127.0.0.1:1111
```

## Publish
The github action will automatically built from the `main` branch to the `gh-page` branch and finally published on our website [shadowsocks-net.github.io/Aurum-Docs](https://shadowsocks-net.github.io/Aurum-Docs).