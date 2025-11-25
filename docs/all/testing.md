---
title: Testing
secret: true
---

<script setup>

import {inject} from "vue"
import {SubstackSymbol} from "../.vitepress/utils.ts"

const data = inject(SubstackSymbol)

</script>

Name: {{ data.ownProfile.name }} ff {{data.posts.length}}

Let's see if the paragraph thing works [Testing Gradient]{from="#8A2387" to="#F27121" size="2rem" weight="800"}
