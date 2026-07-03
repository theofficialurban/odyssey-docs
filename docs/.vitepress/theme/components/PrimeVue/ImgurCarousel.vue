<script setup lang="ts">
import Carousel, { CarouselProps } from "primevue/carousel";

import CarouselContent from "primevue/carouselcontent";
import CarouselItem from "primevue/carouselitem";
import CarouselNext from "primevue/carouselnext";
import CarouselPrev from "primevue/carouselprev";
import CarouselIndicators from "primevue/carouselindicators";
import { type ImageItem } from "../../../GalleriaAlbums";
import Btnn, { type ButtonProps } from "primevue/button";
import { computed, ref } from "vue";

interface Props {
  value: ImageItem[];
  props?: CarouselProps;
  class?: string;
  buttons?: ButtonProps[];
}

const {
  value,
  props = {},
  buttons = [],
  class: className = "",
} = defineProps<Props>();
const images = ref<ImageItem[]>(value);
const mergedProps = computed(() => {
  const defaultProps: CarouselProps = {
    circular: true,
    loop: true,
    autoSize: true,
    autoplayInterval: 10000,
    align: "center",
  };
});
</script>

<template>
  <div class="mt-8 mb-16" style="min-height: auto">
    <Carousel :class="['max-w-xl mx-auto', className]">
      <CarouselContent style="min-height: auto">
        <CarouselItem v-for="(image, i) in value" :key="i" class="p-3">
          <img :src="image.image" :alt="`image-${i + 1}`" />
        </CarouselItem>
      </CarouselContent>
      <div class="flex mt-4 gap-4">
        <CarouselIndicators />
        <div class="flex items-center justify-end gap-2 flex-1">
          <CarouselPrev
            class="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity"
          >
            <Btnn raised severity="danger" variant="outlined"
              ><i class="pi pi-arrow-left"></i
            ></Btnn>
          </CarouselPrev>
          <CarouselNext
            class="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity"
          >
            <Btnn raised severity="success" variant="outlined" size="small">
              <i class="pi pi-arrow-right"></i>
            </Btnn>
          </CarouselNext>
        </div>
      </div>
    </Carousel>
  </div>
</template>
