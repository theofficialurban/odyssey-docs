<script setup lang="ts">
import { computed } from "vue";
import { data } from "../data/substack.data";

interface Props {
  slug: string;
  size?: "large" | "small";
}

const { slug, size: variant = "large" } = defineProps<Props>();

// Substack Orange color for branding accents
const brandColor = "text-[#FF6719]";
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="group block no-underline !text-inherit my-6"
  >
    <article
      v-if="variant === 'large'"
      class="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <div
        class="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800"
      >
        <img
          :src="image"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div class="p-5 flex flex-col gap-3">
        <div
          class="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400"
        >
          <span v-if="author">{{ author }}</span>
          <span v-if="date">{{ date }}</span>
        </div>

        <h3
          class="text-xl font-bold leading-tight text-zinc-900 group-hover:text-[#FF6719] dark:text-zinc-100 transition-colors"
        >
          {{ title }}
        </h3>

        <p
          v-if="description"
          class="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400"
        >
          {{ description }}
        </p>

        <div
          class="mt-2 flex items-center gap-2 border-t border-zinc-100 pt-3 dark:border-zinc-800"
        >
          <svg class="h-4 w-4 fill-[#FF6719]" viewBox="0 0 24 24">
            <path
              d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
            />
          </svg>
          <span
            class="text-xs font-semibold text-zinc-500 group-hover:text-[#FF6719] transition-colors"
            >Read on Substack</span
          >
        </div>
      </div>
    </article>

    <article
      v-else
      class="flex h-32 overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-300 hover:border-[#FF6719]/50 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
    >
      <div class="flex flex-1 flex-col justify-center p-4">
        <div
          v-if="author"
          class="mb-1 text-xs text-zinc-500 dark:text-zinc-400"
        >
          {{ author }}
        </div>
        <h3
          class="line-clamp-2 text-base font-bold leading-snug text-zinc-900 group-hover:text-[#FF6719] dark:text-zinc-100"
        >
          {{ title }}
        </h3>
        <div class="mt-2 flex items-center gap-1.5">
          <svg class="h-3 w-3 fill-[#FF6719]" viewBox="0 0 24 24">
            <path
              d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
            />
          </svg>
          <span
            class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >Substack</span
          >
        </div>
      </div>

      <div
        class="w-32 min-w-[128px] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
      >
        <img
          :src="image"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </article>
  </a>
</template>
