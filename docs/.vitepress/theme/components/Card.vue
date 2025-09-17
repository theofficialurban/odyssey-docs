<script setup>
// This script block defines the properties (props) that our component will accept.
// This allows us to pass unique data for each card we create.

defineProps({
  // The URL the card should link to. This is required.
  href: {
    type: String,
    required: true,
  },
  // The source URL for the card's image. This is required.
  img: {
    type: String,
    required: false,
  },
  // The title of the article. This is required.
  title: {
    type: String,
    required: true,
  },
  // A short description of the article. This is optional.
  description: {
    type: String,
    required: false, // The card will still render without it
  },
  // An optional prop to pass any extra Tailwind classes for one-off customizations.
  className: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'group md:grid md:grid-cols-4 max-md:flex max-md:flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg',
      ' hover:shadow-cyan-500/30 md:max-h-[200px]',
      className,
    ]"
  >
    <div class="overflow-hidden">
      <img
        :src="img ?? `https://i.imgur.com/S8LHDQ7.jpeg`"
        :alt="`Image for ${title}`"
        class="cardImg"
      />
    </div>

    <div class="p-6 md:col-span-3">
      <slot name="title">
        <h1
          class="mb-2 text-xl font-bold text-gray-100 group-hover:text-cyan-400"
        >
          {{ title }}
        </h1>
      </slot>

      <p v-if="description" class="text-base text-gray-400">
        {{ description }}
      </p>
      <sub class="font-mono">{{ href }}</sub>
    </div>
  </a>
</template>

<style>
.cardImg {
  @apply h-full w-full object-cover;
}
</style>
