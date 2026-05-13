<script setup lang="ts">
import { type GalleriaProps, type ButtonProps } from "primevue";
import Galleria from "primevue/galleria";
import Btnn from "primevue/button";
import { computed, ref } from "vue";
import { type ImageItem } from "../../../GalleriaAlbums";

interface Props {
  value: ImageItem[];
  galleriaProps?: GalleriaProps;
  buttons?: ButtonProps[];
  custom?: boolean;
}
// const galleriaModel = defineModel<GalleriaState>({
//   default: { containerVisible: false, activeIndex: 0 },
// });
//const modState = reactive<{visible: boolean, activeIndex: number}>({visible: false, activeIndex: 0, })
const visible = defineModel<boolean>("visible", { default: true });
//const activeIndex = defineModel<number>("activeIndex", { default: 0 });
const activeIndex = ref(0);
const galleria = ref();

const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);
const {
  value,
  galleriaProps = {},
  buttons = [],
  custom = false,
} = defineProps<Props>();
const images = ref<ImageItem[]>(value);
const toggleAutoSlide = () => {
  isAutoPlay.value = !isAutoPlay.value;
};
const onThumbnailButtonClick = () => {
  showThumbnails.value = !showThumbnails.value;
};

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

const toggleFullScreen = () => {
  if (fullScreen.value) {
    closeFullScreen();
  } else {
    openFullScreen();
  }
};
const onFullScreenChange = () => {
  fullScreen.value = !fullScreen.value;
};
const openFullScreen = () => {
  let elem = galleria.value.$el;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};
const closeFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};
const bindDocumentListeners = () => {
  document.addEventListener("fullscreenchange", onFullScreenChange);
  document.addEventListener("mozfullscreenchange", onFullScreenChange);
  document.addEventListener("webkitfullscreenchange", onFullScreenChange);
  document.addEventListener("msfullscreenchange", onFullScreenChange);
};
const unbindDocumentListeners = () => {
  document.removeEventListener("fullscreenchange", onFullScreenChange);
  document.removeEventListener("mozfullscreenchange", onFullScreenChange);
  document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
  document.removeEventListener("msfullscreenchange", onFullScreenChange);
};

const fullScreenIcon = computed(() => {
  return `pi ${fullScreen.value ? "pi-window-minimize" : "pi-window-maximize"}`;
});
const slideButtonIcon = computed(() => {
  return `pi ${isAutoPlay.value ? "pi-pause" : "pi-play"}`;
});
</script>

<template>
  <div class="defaultImgurGalleria" v-if="!custom">
    <Galleria
      v-if="value.length > 0"
      :ref="galleria"
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
  </div>
  <div v-if="custom" class="customImgurGalleria">
    <Galleria
      ref="galleria"
      v-model:active-index="activeIndex"
      v-bind="{
        value: images,
        numVisible: 5,
        containerStyle: 'max-width: 640px',
        showThumbnails,
        showItemNavigators: true,
        fullScreen,
        showItemNavigatorsOnHover: true,
        circular: true,
        autoPlay: isAutoPlay,
        transitionInterval: 3000,
        responsiveOptions,
        pt: {
          root: {
            class: [{ 'flex flex-col': fullScreen }],
          },
          content: {
            class: ['relative', { 'flex-1 justify-center': fullScreen }],
          },
          thumbnails: 'absolute w-full left-0 bottom-0',
        },
        ...galleriaProps,
      }"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.image"
          :alt="slotProps.item.title"
          :style="[
            {
              width: !fullScreen ? '100%' : '',
              display: !fullScreen ? 'block' : '',
            },
          ]"
        />
      </template>
      <template #thumbnail="slotProps">
        <div class="grid gap-4 justify-center">
          <img
            :src="slotProps.item.image"
            :alt="slotProps.item.title"
            style="display: block"
          />
        </div>
      </template>
      <template #footer>
        <div class="flex items-stretch bg-surface-950 text-white h-10">
          <button
            type="button"
            @click="onThumbnailButtonClick"
            class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"
          >
            <i class="pi pi-th-large">Thumbs</i>
          </button>
          <button
            type="button"
            @click="toggleAutoSlide"
            class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"
          >
            <i :class="slideButtonIcon">Toggle</i>
          </button>
          <span v-if="images" class="flex items-center gap-4 ml-3">
            <span class="text-sm"
              >{{ activeIndex + 1 }}/{{ images.length }}</span
            >
            <span class="font-bold text-sm">{{
              images[activeIndex].title
            }}</span>
            <span class="text-sm">{{ images[activeIndex].caption }}</span>
          </span>
          <button
            type="button"
            @click="toggleFullScreen"
            class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto"
          >
            <i :class="fullScreenIcon">Full Screen</i>
          </button>
        </div>
      </template>
    </Galleria>
  </div>
</template>
