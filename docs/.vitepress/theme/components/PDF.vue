<script setup lang="ts">
interface Props {
  src: string;
  title?: string;
  disableLink?: boolean;
  disableDisplay?: boolean;
  width?: string;
  height?: string;
}

const {
  src,
  width = "75%",
  height = "650px",
  title = "PDF Document",
  disableDisplay = false,
  disableLink = false,
} = defineProps<Props>();
</script>

<template>
  <div v-if="disableDisplay == false">
    <center v-if="src">
      <iframe title="PDFViewer" :src="src" :width :height />
      <small v-if="disableLink == false"
        >{{ title }} - <a :href="src">Download File</a></small
      >
      <small v-else-if="disableLink == true">{{ title }}</small>
    </center>
  </div>
  <div v-else>
    <small v-if="disableLink == false"
      >{{ title }} - <a :href="src">Download File</a></small
    >
    <small v-else-if="disableLink == true">{{ title }}</small>
  </div>
</template>
