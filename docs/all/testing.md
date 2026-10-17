---
title: Testing
secret: true
sidebar: false
---

<script setup>

import { useTemplateRef } from 'vue'

//import { data } from "../.vitepress/theme/data/tagnotes.data";

//const Numogram = inject(NumogramInjectionSymbol)
const childRef = useTemplateRef("colorpicker")

</script>

# Testing

<Numogram width="400" height="auto" class="mx-auto" />

<ColorPicker ref="colorpicker" />
