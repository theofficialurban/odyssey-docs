<script setup lang="ts">
import { getRandomOpenGraphImage } from "../../../OpenGraph";
import { NolebaseInlineLinkPreview } from "@nolebase/vitepress-plugin-inline-link-preview";
import NewCard from "primevue/card";
import { computed, ref } from "vue";

interface Props {
  href: string;
  img?: string;
  title: string;
  description?: string;
  class?: string;
  inline?: boolean;
  preview?: boolean;
}
// const props = defineProps({
//   // The URL the card should link to. This is required.
//   href: {
//     type: String,
//     required: true,

//   },
//   // The source URL for the card's image. This is required.
//   img: {
//     type: String,
//     required: false,
//   },
//   // The title of the article. This is required.
//   title: {
//     type: String,
//     required: true,
//   },
//   // A short description of the article. This is optional.
//   description: {
//     type: String,
//     required: false, // The card will still render without it
//   },
//   // An optional prop to pass any extra Tailwind classes for one-off customizations.
//   className: {
//     type: String,
//     required: false,
//     default: "py-3",
//   },

//   preview: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });
const {
  title,
  description = "",
  href,
  preview = false,
  inline = false,
  class: className = "",
  img = getRandomOpenGraphImage(),
} = defineProps<Props>();

const ogImg = computed(() => {
  if (!img || img.includes("og-")) return getRandomOpenGraphImage();
  return img;
});

const topLevelProps = computed(() => {
  if (!preview) {
    return {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      style: { "text-decoration": "none" },
    };
  } else {
    return { href: href };
  }
});

const columnMode = ref("flex max-h-[500px] flex-col");
const lineMode = ref("grid! grid-cols-4! max-h-[300px]");
const regularMode = ref(
  "overflow-hidden max-md:grid! max-md:grid-cols-4! md:flex md:max-h-[500px] max-md:max-h-[300px] md:flex-col",
);
</script>

<template>
  <div
    :class="[
      inline
        ? 'max-h-[300px] w-full'
        : className.length > 0
          ? className
          : 'md:max-w-[350px] md:max-h-[500px] max-md:max-h-[300px] max-md:w-full',
    ]"
  >
    <component
      :is="preview ? NolebaseInlineLinkPreview : 'a'"
      v-bind="topLevelProps"
    >
      <NewCard
        :class="[inline ? lineMode : regularMode]"
        :pt="{
          body: {
            class: [inline ? 'col-span-4' : 'max-md:col-span-4'],
          },
          header: {
            class: [inline ? 'hidden' : 'max-md:hidden'],
          },
        }"
      >
        <template #header>
          <slot name="header" :img="img">
            <div class="overflow-hidden">
              <img
                class="md:max-h-[150px] w-full object-cover"
                alt="user header"
                :src="ogImg"
              />
            </div>
          </slot>
        </template>
        <template #title>
          <slot name="title" :title="title">
            <div class="pb-1">
              <span class="font-bold text-xl">{{ title }}</span>
            </div>
          </slot>
        </template>
        <template v-if="$slots.subtitle" #subtitle>
          <slot name="subtitle"></slot>
        </template>
        <template #content>
          <slot :card="{ title, description, img, preview }">
            <div class="space-y-1">
              <p v-if="description">
                {{
                  description.length > 150
                    ? `${description.substring(0, 150)}...`
                    : description
                }}
              </p>
              <div class="flex items-center gap-2">
                <div
                  style="
                    font-size: 10px;
                    color: #cccccc;
                    line-break: anywhere;
                    word-break: normal;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-family:
                      Interstate,
                      Lucida Grande,
                      Lucida Sans Unicode,
                      Lucida Sans,
                      Garuda,
                      Verdana,
                      Tahoma,
                      sans-serif;
                    font-weight: 100;
                  "
                >
                  <a
                    :href="href"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none"
                    >{{ href }}</a
                  >
                </div>
              </div>
            </div>
          </slot>
        </template>
        <template v-if="$slots.footer" #footer>
          <slot name="footer"></slot>
        </template>
      </NewCard>
    </component>
  </div>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
