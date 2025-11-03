<script setup lang="ts">
interface Props {
  src: string;
  width?: string;
  height?: string;
  controls?: boolean;
  poster?: string;
  muted?: boolean;
  autoplay?: boolean;
  caption?: string;
  thumbnail?: boolean;
  className?: string;
  srcType?: string;
  key?: string | number | symbol;
}

const {
  src,
  width = "640",
  height = "360",
  controls = true,
  poster = "",
  caption = "",
  muted = false,
  autoplay = false,
  thumbnail = false,
  key = "",
  className = "",
  srcType = "video/mp4",
} = defineProps<Props>();
</script>

<template>
  <div v-if="thumbnail === false">
    <video
      v-if="src !== ''"
      v-bind:class="className"
      v-bind:controls="controls"
      v-bind:autoplay="autoplay"
      v-bind:height="height"
      v-bind:muted="muted"
      v-bind:poster="poster"
      v-bind:width="width"
      v-bind:key="key"
    >
      <source v-bind:type="srcType" v-bind:src="src" />
    </video>
  </div>
  <div v-else class="thumbnail custom-block">
    <video
      v-if="src !== ''"
      v-bind:class="className"
      v-bind:controls="controls"
      v-bind:autoplay="autoplay"
      width="688"
      height="417"
      v-bind:muted="muted"
      v-bind:poster="poster"
      v-bind:key="key"
    >
      <source v-bind:type="srcType" v-bind:src="src" />
    </video>
    <div
      v-if="thumbnail == true && caption !== ''"
      class="caption custom-block"
    >
      <p>
        <em>{{ caption }}</em>
      </p>
    </div>
  </div>
</template>
