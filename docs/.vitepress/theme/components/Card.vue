<script setup lang="ts">
import { NolebaseInlineLinkPreview } from "@nolebase/vitepress-plugin-inline-link-preview";
import { useData } from "vitepress";
import { computed } from "vue";

// This script block defines the properties (props) that our component will accept.
// This allows us to pass unique data for each card we create.
const { theme } = useData();

//const baseUrl = theme.value.baseURL ?? "#";
const props = defineProps({
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
  showUrl: {
    type: Boolean,
    required: false,
    default: false,
  },
  titleSize: {
    type: String,
    required: false,
    default: "18px",
  },
  descSize: {
    type: String,
    required: false,
    default: "14px",
  },
  preview: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// const ogImage = computed(() => {
//   // If the href is in the format of ./some-random-url.html the ogImg will be ./og-some-random-url.png
//   if(props.href.includes("./")) {
//     const splt = props.href.split("./")
//     if(splt.length !== 1) return (props.img ?? "https://i.imgur.com/S8LHDQ7.jpeg")
//     // splt[0] = some-random-url.html
//     const fileType = splt[0].split(".")
//     if(fileType.length !== 2) return (props.img ?? "https://i.imgur.com/S8LHDQ7.jpeg")
//     if(fileType[1] === "md" || fileType[1] === "html") {
//       return `./og-${fileType[0]}.png`
//     }
//   } else if(props.href.includes("../")) {
//     const splt = props.href.split("../")
//     if(splt.length !== 1) return (props.img ?? "https://i.imgur.com/S8LHDQ7.jpeg")
//     // splt[0] = some-random-url.html
//     const fileType = splt[0].split(".")
//     if(fileType.length !== 2) return (props.img ?? "https://i.imgur.com/S8LHDQ7.jpeg")
//     if(fileType[1] === "md" || fileType[1] === "html") {
//       return `../og-${fileType[0]}.png`
//     }
//   }
//   return (props.img ?? "https://i.imgur.com/S8LHDQ7.jpeg")
// })
</script>

<template>
  <a
    :href="href"
    v-if="preview === false"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'card group md:grid md:grid-cols-4 max-md:flex max-md:flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg',
      ' hover:shadow-cyan-500/30 md:max-h-[200px]',
      className,
    ]"
  >
    <div class="overflow-hidden">
      <img
        :src="img ?? 'https://i.imgur.com/S8LHDQ7.jpeg'"
        :alt="`Image for ${title}`"
        class="cardImg"
      />
    </div>
    <div class="hidden"><slot></slot></div>
    <div class="p-6 md:col-span-3">
      <slot name="title">
        <h1 class="mb-2 font-bold text-gray-100 group-hover:text-cyan-400">
          {{ title }}
        </h1>
      </slot>

      <p v-if="description" class="text-gray-400">
        {{ description }}
      </p>
      <sub v-if="showUrl === true" class="font-mono">{{ href }}</sub>
    </div>
  </a>

  <NolebaseInlineLinkPreview
    :href="href"
    :class="[
      'card group md:grid md:grid-cols-4 max-md:flex max-md:flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg',
      ' hover:shadow-cyan-500/30 md:max-h-[200px]',
      className,
    ]"
    v-else-if="preview === true"
  >
    <div class="overflow-hidden">
      <img
        :src="img ?? 'https://i.imgur.com/S8LHDQ7.jpeg'"
        :alt="`Image for ${title}`"
        class="cardImg"
      />
    </div>
    <div class="hidden"><slot></slot></div>
    <div class="p-6 md:col-span-3">
      <slot name="title">
        <h1 class="mb-2 font-bold text-gray-100 group-hover:text-cyan-400">
          {{ title }}
        </h1>
      </slot>

      <p v-if="description" class="text-gray-400">
        {{ description }}
      </p>
      <sub v-if="showUrl === true" class="font-mono">{{ href }}</sub>
    </div>
  </NolebaseInlineLinkPreview>
</template>

<style>
@reference "tailwindcss";

.card {
  .cardImg {
    @apply h-full w-full object-cover;
  }
  h1 {
    @apply leading-6 max-md:text-sm;
    @media (width >= 48rem) {
      font-size: v-bind(titleSize);
    }
  }
  p {
    @apply leading-5 max-md:text-sm;
    @media (width >= 48rem) {
      font-size: v-bind(descSize);
    }
  }
}
</style>
