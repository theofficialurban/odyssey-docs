---
title: 110.Uniform Commercial Code
secret: true
layout: page
---

<script setup>
import {VPLCollectionItemTags, useCollection} from '@lando/vitepress-theme-default-plus'
const {tags} = useCollection();
</script>

<VPLCollectionItemTags :v-model="tags" />

<CollectionIndex title="Uniform Commercial Code" lead="Articles relating to the Uniform Commercial Code (UCC) and Commerce / Contractual Law" :collection="['ucc']" :useTags="true" />
