<script setup lang="ts">
import { getRandomOpenGraphImage } from "../../../OpenGraph";
import { NolebaseInlineLinkPreview } from "@nolebase/vitepress-plugin-inline-link-preview";
import NewCard from "primevue/card";
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
    default: "py-3",
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
</script>

<template>
  <div :class="[className]">
    <a
      :href="href"
      v-if="preview === false"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NewCard
        class="w-full overflow-hidden"
        :pt="{
          root: {
            class:
              'max-md:grid max-md:grid-cols-4 md:flex md:flex-col overflow-hidden',
          },
        }"
      >
        <template #header>
          <div class="overflow-hidden">
            <img
              class="h-full w-full object-cover"
              alt="user header"
              :src="img ?? getRandomOpenGraphImage()"
            />
          </div>
        </template>
        <template #title>
          <div class="p-6 md:col-span-3">
            <span class="font-bold text-xl">{{ title }}</span>
          </div>
        </template>
        <!-- <template #subtitle>
        <div class="flex items-center gap-2">
          <Tag severity="info" value="Daily" />
          <Tag severity="info" value="Premium" />
        </div>
      </template> -->
        <template #content>
          <div class="space-y-4">
            <p>
              Sakura Fresh Market is your go-to store for fresh local produce,
              Japanese snacks, and daily essentials — all in one place!
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
            <!-- <div class="flex items-center gap-2">
            <MapMarker />
            <span>Tokyo, Shibuya-ku</span>
          </div> -->
          </div>
        </template>
        <!-- <template #footer>
        <div class="flex items-center gap-2 mt-4">
          <Button severity="secondary" outlined class="flex-1">
            <Phone />
            Call Us
          </Button>
          <Button class="flex-1">
            <Globe />
            Visit Site
          </Button>
        </div>
      </template> -->
      </NewCard>
    </a>
    <NolebaseInlineLinkPreview :href="href" v-else-if="preview === true">
      <NewCard
        class="w-full overflow-hidden"
        :pt="{
          root: {
            class:
              'max-md:grid max-md:grid-cols-4 md:flex md:flex-col overflow-hidden',
          },
        }"
      >
        <template #header>
          <div class="relative">
            <img
              class="h-full w-full object-cover"
              alt="user header"
              :src="img ?? getRandomOpenGraphImage()"
            />
          </div>
        </template>
        <template #title>
          <div class="p-6 md:col-span-3">
            <span class="font-bold text-xl">{{ title }}</span>
          </div>
        </template>
        <!-- <template #subtitle>
        <div class="flex items-center gap-2">
          <Tag severity="info" value="Daily" />
          <Tag severity="info" value="Premium" />
        </div>
      </template> -->
        <template #content>
          <div class="space-y-4">
            <p>
              Sakura Fresh Market is your go-to store for fresh local produce,
              Japanese snacks, and daily essentials — all in one place!
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
            <!-- <div class="flex items-center gap-2">
            <MapMarker />
            <span>Tokyo, Shibuya-ku</span>
          </div> -->
          </div>
        </template>
        <!-- <template #footer>
        <div class="flex items-center gap-2 mt-4">
          <Button severity="secondary" outlined class="flex-1">
            <Phone />
            Call Us
          </Button>
          <Button class="flex-1">
            <Globe />
            Visit Site
          </Button>
        </div>
      </template> -->
      </NewCard></NolebaseInlineLinkPreview
    >
  </div>
</template>
