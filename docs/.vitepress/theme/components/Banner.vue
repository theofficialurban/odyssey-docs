<script setup lang="ts" generic="T extends BannerProps">
import { useData } from "vitepress";
import { computed, reactive, watch, watchEffect } from "vue";
import type { BannerProps } from "../index";
const {
  settings: {
    img,
    radius = 8,
    width = "100%",
    height = "10rem",
    blur = 1,
    font = "Caesar Dressing",
  },
} = defineProps<{ settings: T }>();
const dt = useData();
const background = computed(() => {
  return `url(${
    dt.frontmatter.value.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg"
  }) no-repeat`;
});
const styleObj = reactive({
  background,
  height,
  width,
  "border-radius": `${radius}px`,

  "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  filter: `blur(${blur}px)`,
});

const fnt = { "font-family": font };
</script>

<template>
  <div class="img_wrapper">
    <div class="img_text" :style="fnt">
      <slot>{{ dt.frontmatter.value.title ?? "Urban Odyssey" }}</slot>
    </div>

    <div class="img_bg" :style="styleObj"></div>
  </div>
  <div class="img_padd"></div>
</template>

<style>
.img_wrapper {
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
}
.img_padd {
  padding-bottom: 20px;
}
.img_text {
  color: white;
  text-align: center;
  font-size: xx-large;
  /* font-family: "Caesar Dressing", system-ui; */
  font-weight: 400;
  font-style: normal;
  position: absolute;
  z-index: 1;
}
</style>
