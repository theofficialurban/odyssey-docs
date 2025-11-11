<script lang="ts" setup>
import type { EmbedPlatform } from "../../utils";

interface Props {
  platform: EmbedPlatform;
  params?: Record<string, string>;
  className?: string;
  src: string;
}

const { platform, params = {}, className, src } = defineProps<Props>();
</script>

<template>
  <div v-if="platform === 'X-Timeline'">
    <a
      v-bind:class="['twitter-timeline', className]"
      data-theme="dark"
      v-bind:href="src"
      v-bind="params"
      >Timeline</a
    >
  </div>
  <div v-else-if="platform === 'Odysee'">
    <iframe
      id="odysee-iframe"
      style="width: 100%; aspect-ratio: 16 / 9"
      v-bind:src="src"
      allowfullscreen
      v-bind="params"
    ></iframe>
  </div>
  <div v-else-if="platform === 'Rumble'">
    <iframe
      :class="['rumble', className]"
      width="640"
      height="360"
      v-bind:src="src"
      frameborder="0"
      allowfullscreen
      v-bind="params"
    ></iframe>
  </div>
  <div v-else-if="platform === 'Raw'" v-bind="params">
    <slot>Raw Embed</slot>
  </div>
</template>
