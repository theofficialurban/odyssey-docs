<script setup lang="ts">
interface Props {
  src: string;
  width?: string;
  height?: string;
}

const { src, width = "75%", height = "650px" } = defineProps<Props>();
</script>

<template>
  <center v-if="src">
    <iframe title="PDFViewer" :src="src" :width :height />
  </center>
</template>
