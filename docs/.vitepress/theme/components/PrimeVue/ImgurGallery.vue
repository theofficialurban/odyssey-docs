<script setup lang="ts">
import GalleryBackdrop from "primevue/gallerybackdrop";
import GalleryContent from "primevue/gallerycontent";
import GalleryHeader from "primevue/galleryheader";
import GalleryFooter from "primevue/galleryfooter";
import GalleryThumbnail from "primevue/gallerythumbnail";
import GalleryThumbnailContent from "primevue/gallerythumbnailcontent";
import GalleryThumbnailItem from "primevue/gallerythumbnailitem";
import GalleryItem from "primevue/galleryitem";
import GalleryDownload from "primevue/gallerydownload";
import GalleryZoomIn from "primevue/galleryzoomin";
import GalleryZoomOut from "primevue/galleryzoomout";
import Gallery from "primevue/gallery";
import ChevronLeft from "@primevue/icons/chevronleft";
import ChevronRight from "@primevue/icons/chevronright";
import GalleryPrev from "primevue/galleryprev";
import GalleryNext from "primevue/gallerynext";
import Download from "@primeicons/vue/download";

import SearchMinus from "@primevue/icons/searchminus";
import SearchPlus from "@primevue/icons/searchplus";

import { computed, h, ref } from "vue";
import { type ImageItem } from "../../../GalleriaAlbums";

interface Props {
  value: ImageItem[];
}

const activeIndex = ref(0);

const { value } = defineProps<Props>();

const images = ref<ImageItem[]>(value);
const activeImage = computed<ImageItem | null>(() => {
  const active = images.value.at(activeIndex.value);
  if (!active) return null;
  return active;
});
</script>

<template>
  <Gallery v-model:activeIndex="activeIndex" class="h-150!">
    <GalleryBackdrop />

    <GalleryHeader class="inline-flex justify-between">
      <div class="gap-2 inline-flex">
        <span class="font-bold">{{
          activeImage ? activeImage.title : "ERR"
        }}</span>
        <small
          v-if="activeImage && activeImage.caption && !activeImage.captionHtml"
          >{{ activeImage ? activeImage.caption : "ERR" }}</small
        >
        <span
          v-else-if="
            activeImage && activeImage.caption && activeImage.captionHtml
          "
          v-html="activeImage.caption"
        ></span>
      </div>
      <div class="gap-0.5">
        <GalleryPrev>
          <ChevronLeft />
        </GalleryPrev>
        <GalleryNext>
          <ChevronRight />
        </GalleryNext>
        <GalleryZoomIn>
          <SearchPlus />
        </GalleryZoomIn>
        <GalleryZoomOut>
          <SearchMinus />
        </GalleryZoomOut>

        <GalleryDownload>
          <Download />
        </GalleryDownload>
        <!-- <GalleryFullScreen class="group">
          <ArrowUpRightAndArrowDownLeftFromCenter
            class="group-data-[fullscreen]:hidden"
          />
          <ArrowDownLeftAndArrowUpRightToCenter
            class="hidden group-data-[fullscreen]:block"
          />
        </GalleryFullScreen> -->
      </div>
    </GalleryHeader>
    <GalleryContent>
      <GalleryItem
        v-for="(image, index) in images"
        :key="index"
        :pt="{ root: { style: { 'aspect-ratio': '1 / 1', width: '100%' } } }"
      >
        <img :src="image.image" :alt="`image-${index + 1}`" />
      </GalleryItem>
    </GalleryContent>
    <GalleryFooter>
      <GalleryThumbnail>
        <GalleryThumbnailContent>
          <GalleryThumbnailItem
            v-for="(image, index) in images"
            :key="index"
            :index="index"
          >
            <img
              draggable="false"
              :src="image.image"
              class="h-full w-full object-cover"
            />
          </GalleryThumbnailItem>
        </GalleryThumbnailContent>
      </GalleryThumbnail>
    </GalleryFooter>
  </Gallery>
</template>
