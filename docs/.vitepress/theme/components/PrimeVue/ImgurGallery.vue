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
import ChevronLeft from "@primeicons/vue/chevron-left";
import ChevronRight from "@primeicons/vue/chevron-right";
import GalleryPrev from "primevue/galleryprev";
import GalleryNext from "primevue/gallerynext";
import Download from "@primeicons/vue/download";
import Btnn, { type ButtonProps } from "primevue/button";
import BtnGroup from "primevue/buttongroup";
import SearchMinus from "@primeicons/vue/search-minus";
import SearchPlus from "@primeicons/vue/search-plus";

import { computed, h, ref } from "vue";
import { type ImageItem } from "../../../GalleriaAlbums";

type ButtonItem = {
  icon?: string;
  value: string;
  href: string;
  props?: ButtonProps;
};
interface Props {
  value: ImageItem[];
  buttons?: ButtonItem[];
  imgurAlbum?: string | null;
}

const activeIndex = ref(0);

const { value, buttons = [], imgurAlbum = null } = defineProps<Props>();
const buttonsRef = ref<ButtonItem[]>(buttons);
const images = ref<ImageItem[]>(value);
const activeImage = computed<ImageItem | null>(() => {
  const active = images.value.at(activeIndex.value);
  if (!active) return null;
  return active;
});

if (imgurAlbum) {
  buttonsRef.value.push({
    value: "Imgur Album",
    props: { variant: "outlined", size: "small", fluid: true },
    href: imgurAlbum,
  });
}
</script>

<template>
  <Gallery v-model:activeIndex="activeIndex" class="h-150!">
    <GalleryBackdrop />

    <GalleryHeader class="flex justify-between gap-1">
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
      <div class="gap-0.5 inline-flex">
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
      <GalleryPrev>
        <ChevronLeft />
      </GalleryPrev>
      <GalleryNext>
        <ChevronRight />
      </GalleryNext>
      <GalleryItem
        v-for="(image, index) in images"
        :key="index"
        :pt="{ root: { style: { 'aspect-ratio': '1 / 1', width: '100%' } } }"
      >
        <img :src="image.image" :alt="`image-${index + 1}`" />
      </GalleryItem>
    </GalleryContent>
    <GalleryFooter class="flex-col gap-1">
      <BtnGroup v-if="buttons && buttons.length > 0" class="w-full px-4 py-2">
        <Btnn
          v-for="b in buttons"
          v-bind="{
            target: '_blank',
            rel: 'noopener',
            as: 'a',
            size: 'small',
            fluid: true,
            href: b.href,

            ...b.props,
          }"
        >
          <i v-if="b.icon" :class="b.icon"></i>
          {{ b.value }}
        </Btnn>
      </BtnGroup>
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
