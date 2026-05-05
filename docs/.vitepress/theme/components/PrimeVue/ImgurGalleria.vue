<script setup lang="ts">
import { type GalleriaProps } from "primevue";
import Galleria from "primevue/galleria";
import { useSlots } from "vue";

type ImageItem = { image: string; title: string; caption: string };
interface Props {
  value: ImageItem[];
  galleriaProps?: GalleriaProps;
}

const { value, galleriaProps = {} } = defineProps<Props>();
</script>

<template>
  <Galleria
    v-if="value.length > 0"
    v-bind="{
      value,
      numVisible: 5,
      showThumbnails: false,
      showIndicators: true,
      circular: true,
      autoPlay: true,
      containerClass: 'mx-auto max-w-[650px]',
      ...galleriaProps,
    }"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #item="slotProps">
      <img
        :src="slotProps.item.image"
        :alt="slotProps.item.title"
        style="width: 100%"
      />
    </template>
    <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.image"
        width="25px"
        class="max-w-[25px]"
        :alt="slotProps.item.caption"
      />
    </template>
    <template #caption="slotProps">
      <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
      <p class="text-white">{{ slotProps.item.caption }}</p>
    </template>
  </Galleria>
</template>
