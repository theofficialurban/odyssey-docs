<script setup lang="ts">
import { useData } from "vitepress";
import { computed, reactive, watchEffect } from "vue";
import {
  fontDefault,
  setDefault,
  type BannerFontProps,
  type BannerProps,
  type SettingsFrontmatter,
} from "../index";

const dt = useData();

const bannerSettings: { font: BannerFontProps; settings: BannerProps } = {
  font: reactive<BannerFontProps>(fontDefault),
  settings: reactive<BannerProps>(setDefault),
};

const fnt = bannerSettings.font;
const stings = bannerSettings.settings;
const bgString = computed(() => {
  return `url(${
    dt.frontmatter.value.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg"
  }) no-repeat`;
});
const styleObj = reactive({
  background: `url(${
    dt.frontmatter.value.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg"
  }) no-repeat`,
  height: stings.height,
  width: stings.width,
  "border-radius": `${stings.radius}px`,

  "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  filter: `blur(${stings.blur}px)`,
});
const fntStyle = reactive({
  fontSize: fnt.size ?? "xx-large",
  fontStyle: fnt.style ?? "normal",
  fontWeight: Number(fnt.weight) ?? 400,
  fontFamily: fnt.family ?? "Caesar Dressing",
  color: fnt.color ?? "white",
});

const title = computed(() => {
  return fnt.text ?? dt.frontmatter.value.title;
});
defineExpose({
  font: fnt,
  settings: stings,
});

watchEffect(() => {
  const fms: SettingsFrontmatter = dt.frontmatter.value.bannerSettings;
  const t = dt.frontmatter.value.title;
  if (dt.frontmatter.value.ogimage) {
    styleObj.background = bgString.value;
  }
  if (fms) {
    // const { family, size, style, weight, color, text } = fms.font;
    // const { img, blur, radius, width, height } = fms.settings;
    bannerSettings.font = fms.font;
    bannerSettings.settings = fms.settings;
  } else {
    bannerSettings.font = fontDefault;
    bannerSettings.settings = setDefault;
    styleObj.filter = `blur(1px)`;
  }
  fntStyle.color = bannerSettings.font.color ?? "white";
  fntStyle.fontFamily = bannerSettings.font.family ?? "Caesar Dressing";
  fntStyle.fontSize = bannerSettings.font.size ?? "xx-large";
  fntStyle.fontStyle = bannerSettings.font.style ?? "normal";
  fntStyle.fontWeight = Number(bannerSettings.font.weight) ?? 400;
});
</script>

<template>
  <div class="img_wrapper">
    <div class="img_text" :style="fntStyle">
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
