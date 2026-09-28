---
title: Testing
secret: true
---

<script setup>

import { useTemplateRef, onMounted } from 'vue'
//import { data } from "../.vitepress/theme/data/tagnotes.data";

const childRef = useTemplateRef("colorpicker")

// onMounted(() => {
//   // childRef.value will hold an instance of <Child />
//   console.log(data)
// })

</script>

# Testing

<ColorPicker ref="colorpicker" />

<PostCollection :tags="['Urban\'s Videos', 'Mermaid Charts']" />
