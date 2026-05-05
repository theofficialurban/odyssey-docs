<template>
  <div class="card">
    <Carousel
      :responsiveOptions="responsiveOptions"
      v-bind="{
        value: products,
        numScroll: 3,
        numVisible: 3,
        circular: true,
        containerClass: 'm-2',
        ...carouselProps,
      }"
    >
      <template #item="slotProps">
        <div
          class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div
            v-if="slotProps.data.href"
            class="flex justify-between items-center"
          >
            <span>
              <Btn
                label="Go to Page"
                as="a"
                link
                variant="link"
                :href="slotProps.data.href"
                class="ml-2"
              />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script
  setup
  lang="ts"
  generic="
    T extends {
      [key: string]: string;
      image: string;
      name: string;
    }[]
  "
>
import { type CarouselResponsiveOptions } from "primevue";
import Carousel, { type CarouselProps } from "primevue/carousel";
import Btn from "primevue/button";
import { ref } from "vue";

interface Props {
  products: T;

  carouselProps?: CarouselProps;
}
const { products, carouselProps = {} } = defineProps<Props>();

const responsiveOptions = ref<CarouselResponsiveOptions[]>([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style lang="css">
ul.p-carousel-indicator-list {
  list-style: none;
  list-style-type: none;
}
</style>
