---
title: 69.Vitepress
layout: doc
secret: true
---

# VitePress & Vue

1. Vitepress Docs: [Here](https://vitepress.dev)
2. Vue Docs: [Here](https://vuejs.org/guide/essentials/computed.html)

# Head Config

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string];
```
