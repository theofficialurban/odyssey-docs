<script lang="ts" setup>
interface Props {
  src: string;
  controls?: boolean;
  caption?: string;
  download?: boolean;
  autoplay?: boolean;
  className?: string;
  captionClass?: string;
  loop?: boolean;
  muted?: boolean;
}

const {
  src,
  controls = true,
  caption = "",
  download = true,
  autoplay = false,
  loop = false,
  muted = false,
  className = "",
  captionClass = "pb-4",
} = defineProps<Props>();
</script>

<template>
  <figure v-bind:class="className">
    <figcaption v-if="caption && caption !== ''" v-bind:class="captionClass">
      {{ caption }}
    </figcaption>
    <audio
      v-bind:controls
      v-bind:autoplay
      v-bind:caption
      v-bind:download
      v-bind:loop
      v-bind:src
      v-bind:muted
    ></audio>
  </figure>
</template>
