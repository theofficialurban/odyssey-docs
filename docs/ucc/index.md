---
title: 110.Uniform Commercial Code
secret: true
layout: page
---

<VPLCollectionPage>
  <VPLCollectionPageTitle>
    <template #title>
      Guides
    </template>
    <template #lead>
      Helpful tutorial-like content!
    </template>
  </VPLCollectionPageTitle>
  <VPLCollectionPageTags v-model="tags" />
  <VPLCollectionItems :items="pages" :tags="tags"/>
</VPLCollectionPage>

<script setup>
import {useCollection} from '@lando/vitepress-theme-default-plus';
import {VPLCollectionPage, VPLCollectionPageTags, VPLCollectionPageTitle, VPLCollectionItems} from '@lando/vitepress-theme-default-plus';

const {pages, tags} = useCollection('ucc');
</script>
