<script setup lang="ts">
import { computed } from "vue";

interface Props {
  src: string;
  title?: boolean;
}

// https://imgur.com/a/ECE5xTo

const { src, title = true } = defineProps<Props>();

const compId = computed<string | null>(() => {
  const split = src.split("imgur.com/");
  if (split.length == 0) {
    return null;
  } else if (split[0] != "https://") {
    return null;
  }
  return split[1];
});
</script>

<template>
  <div v-if="compId !== null">
    <blockquote
      v-if="title === true"
      class="imgur-embed-pub"
      lang="en"
      v-bind:data-id="compId"
    >
      <a :href="src">Title</a>
    </blockquote>
    <blockquote
      v-else
      class="imgur-embed-pub"
      data-context="false"
      lang="en"
      v-bind:data-id="compId"
    ></blockquote>
  </div>
</template>
