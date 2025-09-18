<script setup lang="ts">
import { ref, withDefaults } from "vue";
const {
  spotify = false,
  apple = false,
  width = "480px",
  height = "350px",
  classes = { spotify: "", apple: "" },
} = defineProps<{
  spotify?: boolean;
  apple?: boolean;
  width?: string;
  height?: string;
  classes?: { spotify?: string; apple?: string };
}>();
const spotRef = ref(null);
const appleRef = ref(null);
// defineExpose({
//   spotify: spotRef,
//   apple: appleRef,
// });
</script>

<template>
  <div v-if="spotify">
    <iframe
      data-testid="embed-iframe"
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/show/4IJx2Q8TUn013NAt6sk0hp?utm_source=generator"
      :height="height"
      :width="width"
      :class="classes.spotify"
      ref="spotRef"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  <div v-if="apple">
    <iframe
      :height="height"
      :width="width"
      :class="classes.apple"
      ref="appleRef"
      title="Media player"
      src="https://embed.podcasts.apple.com/us/podcast/urban-odyssey/id1743846524?itscg=30200&amp;itsct=podcast_box_player&amp;ls=1&amp;mttnsubad=1743846524&amp;theme=dark"
      id="embedPlayer"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      allow="autoplay *; encrypted-media *; clipboard-write"
      style="
        border: 0px;
        border-radius: 12px;
        width: 100%;
        height: 450px;
        max-width: 660px;
      "
    ></iframe>
  </div>
</template>
