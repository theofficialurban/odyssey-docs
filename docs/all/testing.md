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

{{ childRef ? (childRef.value ?? "Error 2") : "Error 1" }}

<ColorPicker ref="colorpicker" />

<NewCard title="Tyndall FX — Real-Time Spatial Intelligence for Defense & Field Operations" img="https://www.tyndallfx.com/og-image.jpg" description="Tyndall FX pioneers sovereign real-time 3D mapping, GNSS-free navigation and swarm intelligence for defense, public safety and critical field operations." href="https://www.tyndallfx.com/products/terraswarm" class="max-h-[350px] w-full" />
