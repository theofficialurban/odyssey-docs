<script setup lang="ts">
import "../global.css";
import Podcasts from "./Podcasts.vue";
</script>

<template>
  <div class="container flex flex-col p-10 gap-8">
    <div class="mx-auto w-full bg-slate-900 border border-slate-800">
      <div class="p-4 flex flex-col gap-4">
        <span class="sHead font-bold text-4xl">Urban's Spotify Playlists</span>
        <p>
          Please let me know if any of the links are not working, I've tried to
          keep this together as much as possible. My Spotify profile should
          allow you to view all of my playlists. Urban's Spotify Profile Make
          sure to check the different tabs at the bottom of the window, there
          are multiple pages.
        </p>
        <p>
          Urban Odyssey is available on nearly all mainstream podcast listings,
          for links to alternate platforms, see the Spotify Creators homepage.
        </p>
        <a
          class="font-bold underline text-red-500"
          href="https://podcasters.spotify.com/pod/show/urbanodyssey"
          >Click here for the Spotify Creators Homepage</a
        >
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <Podcasts spotify apple />
    </div>
    <div>
      <iframe
        width="100%"
        class="mx-auto"
        height="450px"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBfdUQc-NNaFX7DdZtOUhCxGKR5e_OrIViOYFvb3myV8aLtpnd6ZJRaA5qYqr8sGfKasAioEadx0xA/pubhtml?widget=true&amp;headers=false"
      ></iframe>
    </div>
  </div>
</template>
<style>
.sHead {
  font-family: Trade Winds;
}
</style>
