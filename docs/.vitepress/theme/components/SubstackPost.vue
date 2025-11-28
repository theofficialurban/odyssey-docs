<script setup lang="ts">
interface Props {
  href: string;
  title?: string;
  description?: string;
}

const { href, title = "Post Title", description = "" } = defineProps<Props>();

// Substack Orange color for branding accents
//const brandColor = "text-[#FF6719]";
</script>

<template>
  <div class="substack-post-embed">
    <slot name="title">
      <p lang="en">
        {{ title }}
      </p>
    </slot>
    <slot name="body">
      <p>
        {{ description }}
      </p>
    </slot>
    <a data-post-link :href="href">Read on Substack</a>
  </div>
</template>
