<script setup lang="ts">
import { computed, IframeHTMLAttributes } from "vue";

interface Props {
  playlist: string;

  props?: IframeHTMLAttributes;
  class?: string;
}

const defaultProps: IframeHTMLAttributes = {
  style: "border-radius: 12px",
  width: "100%",
  height: "352px",
  loading: "lazy",
  allow: `autoplay;
      clipboard-write;
      encrypted-media;
      fullscreen;
      picture-in-picture;`,
};

const { playlist, props = {} } = defineProps<Props>();

// Supply either playlist ID or full link
const isLink = computed<boolean>(() => {
  return playlist.includes("/embed/playlist");
});

const playlistEmbedLink = computed(() => {
  if (isLink) return playlist;
  return `https://open.spotify.com/embed/playlist/${playlist}`;
});
</script>

<template>
  <iframe
    data-testid="embed-iframe"
    v-bind="{ ...defaultProps, ...props, src: playlistEmbedLink }"
  ></iframe>
</template>
