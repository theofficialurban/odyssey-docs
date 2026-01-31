<script lang="ts" setup>
import type { EmbedPlatform, EmbedPlatformBtn } from "../../utils";
import PlatformBtns from "./PlatformBtns.vue";

interface Props {
  platform: EmbedPlatform;
  params?: Record<string, string>;
  className?: string;
  src: string;
  thumbnail?: false | string;
  buttons?: EmbedPlatformBtn[] | null;
}

const {
  platform,
  params = {},
  className,
  src,
  thumbnail = false,
  buttons = null,
} = defineProps<Props>();
</script>

<template>
  <div v-if="thumbnail === false" class="">
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

    <div v-else-if="platform === 'Raw'">
      <slot>
        <iframe
          :class="['raw-embed', className]"
          v-bind="params"
          width="640"
          height="360"
          v-bind:src="src"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </slot>
    </div>
    <div v-else-if="platform === 'Spotify'">
      <slot>
        <iframe
          data-testid="embed-iframe"
          style="border-radius: 12px"
          v-bind:src="src"
          width="100%"
          height="352"
          frameBorder="0"
          allow="
            autoplay;
            clipboard-write;
            encrypted-media;
            fullscreen;
            picture-in-picture;
          "
          loading="lazy"
        ></iframe>
      </slot>
    </div>
    <div v-if="buttons !== null && buttons.length > 0">
      <PlatformBtns :buttons />
    </div>
  </div>
  <div v-else class="thumbnail custom-block">
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
    <div v-else-if="platform === 'Raw'">
      <slot>
        <iframe
          :class="['raw-embed', className]"
          v-bind="params"
          width="640"
          height="360"
          v-bind:src="src"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </slot>
    </div>
    <div v-else-if="platform === 'Spotify'">
      <slot>
        <iframe
          data-testid="embed-iframe"
          style="border-radius: 12px"
          v-bind:src="src"
          width="100%"
          height="352"
          frameBorder="0"
          allow="
            autoplay;
            clipboard-write;
            encrypted-media;
            fullscreen;
            picture-in-picture;
          "
          loading="lazy"
        ></iframe>
      </slot>
    </div>
    <div v-if="thumbnail.length > 0" class="caption custom-block">
      <p>
        <em>{{ thumbnail ?? "Empty Caption" }}</em>
      </p>
    </div>
    <div v-if="buttons !== null && buttons.length > 0">
      <PlatformBtns :buttons />
    </div>
  </div>
</template>
