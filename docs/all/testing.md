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
