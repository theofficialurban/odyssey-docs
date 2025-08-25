<script
  setup
  lang="ts"
  generic="T extends BannerProps, U extends BannerFontProps"
>
import { useData } from "vitepress";
import { computed, reactive, watch, watchEffect } from "vue";
import type { BannerFontProps, BannerProps } from "../index";
import type { StyleValue } from "vue";
const {
  settings: { img, radius = 8, width = "100%", height = "10rem", blur = 1 },
  font: {
    size = "xx-large",
    style = "normal",
    weight = "400",
    family = "Caesar Dressing",
    color = "white",
    text,
  },
} = defineProps<{ settings: T; font: BannerFontProps }>();
const dt = useData();
const background = computed(() => {
  return `url(${
    dt.frontmatter.value.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg"
  }) no-repeat`;
});
const title = computed(() => {
  return text ?? dt.frontmatter.value.title;
});
const styleObj = reactive({
  background,
  height,
  width,
  "border-radius": `${radius}px`,

  "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  filter: `blur(${blur}px)`,
});

const fnt = reactive({
  fontSize: size,
  fontStyle: style,
  fontWeight: Number(weight),
  fontFamily: family,
  color: color,
});
</script>

<template>
  <div class="img_wrapper">
    <div class="img_text" :style="fnt">
      <slot>{{ title }}</slot>
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
