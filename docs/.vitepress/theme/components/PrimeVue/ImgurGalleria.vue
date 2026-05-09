<script setup lang="ts">
import { type GalleriaProps, type ButtonProps } from "primevue";
import Galleria, { GalleriaEmits, GalleriaState } from "primevue/galleria";
import Btnn from "primevue/button";
import { reactive, useSlots } from "vue";

type ImageItem = { image: string; title: string; caption?: string };
interface Props {
  value: ImageItem[];
  galleriaProps?: GalleriaProps;
  buttons?: ButtonProps[];
}
// const galleriaModel = defineModel<GalleriaState>({
//   default: { containerVisible: false, activeIndex: 0 },
// });
//const modState = reactive<{visible: boolean, activeIndex: number}>({visible: false, activeIndex: 0, })
const visible = defineModel<boolean>("visible", { default: true });
const activeIndex = defineModel<number>("activeIndex", { default: 0 });
const { value, galleriaProps = {}, buttons = [] } = defineProps<Props>();
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
      showItemNavigators: true,
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
      <slot name="thumbnail" v-bind="slotProps">
        <img
          :src="slotProps.item.image"
          width="100px"
          class="max-w-[25px]"
          :alt="slotProps.item.caption"
        />
      </slot>
    </template>
    <template #caption="slotProps">
      <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
      <p v-if="slotProps.item.caption" class="text-white">
        {{ slotProps.item.caption }}
      </p>
    </template>
    <template #footer>
      <slot name="footer">
        <div
          v-if="buttons.length > 0"
          class="flex justify-center flex-wrap gap-4 m-4"
        >
          <Btnn v-for="button in buttons" v-bind="button" />
        </div>
      </slot>
    </template>
  </Galleria>
</template>
