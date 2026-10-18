---
title: Testing
secret: true
---

<script setup>

import { useTemplateRef } from 'vue'

//import { data } from "../.vitepress/theme/data/tagnotes.data";

//const Numogram = inject(NumogramInjectionSymbol)
const childRef = useTemplateRef("colorpicker")

</script>

# Testing

<ColorPicker ref="colorpicker" />
