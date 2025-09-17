<script setup lang="ts">
import { computed, inject } from "vue";
import ArticleCard from "./Card.vue"; // Import our original "dumb" component

const posts = inject<Record<string, any>[]>("posts");
// This component only accepts one prop: the link to the article.
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

// Find the post data that matches the href passed to this component.
// The data comes from our posts.js loader!
const post = computed(() => {
  // The loaded data is available at theme.value.posts
  return posts?.find((p) => p.href === props.href);
});
</script>

<template>
  <ArticleCard
    v-if="post"
    :href="post.href"
    :title="post.title"
    :img="post.ogimage"
    :description="post.description"
  />
  <div v-else class="p-4 border border-red-500 rounded-lg bg-red-500/10">
    <p class="text-red-400">
      Error: Could not find post data for link: {{ href }}
    </p>
  </div>
</template>
