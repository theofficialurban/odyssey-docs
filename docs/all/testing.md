---
title: Testing
secret: true
---

<script setup>

import { useTemplateRef, onMounted } from 'vue'

const childRef = useTemplateRef("colorpicker")

onMounted(() => {
  // childRef.value will hold an instance of <Child />
  console.log(childRef)
})

</script>

# Testing

<ColorPicker ref="colorpicker" />

## Accord

<Accordion :tabs="[{title: 'Testing One', value: 1, content: 'https://i.imgur.com/BhdhPMJ.png'}, {title: 'Testing Two', value: 2, content: 'https://i.imgur.com/Tu6dUe9.png'}]">
<template #content="{tab: {title, content, value}, components: {AH, AC}}">
<component :is="AH">{{title}}</component>
<component :is="AC">
<img :src="content" alt="some" />
</component>
</template>
</Accordion>
