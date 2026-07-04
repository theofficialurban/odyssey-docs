---
title: Testing
secret: true
---

<script setup>

import {inject} from "vue"
import ImgurCarousel from "../.vitepress/theme/components/PrimeVue/ImgurCarousel.vue"

const vocabulary = inject("agitpropgalleria")

</script>

# Testing

<ImgurGallery :value="vocabulary" :buttons="[{icon: 'pi pi-image', value: 'Imgur Album', props: {variant: 'outlined', size: 'small', fluid: true}, href: 'https://imgur.com/a/jacques-ellul-propaganda-agitprop-words-terms-YCtfyDp'}]" :galleriaProps="{showIndicators: false}" />

<ImgurCarousel :value="vocabulary" />

## Testing Icons

<i class="pi pi-arrow-right"></i>
<i class="pi pi-times"></i>
<i class="pi pi-search"></i>
<i class="pi pi-user"></i>

## Highlight test

<Hl>Testing</Hl>
<Hl :floating="false">Testing</Hl>

<Hl color="F54927" :alpha="20">Testing</Hl>
<Hl color="27F538" :alpha="40" :floating="false">Testing</Hl>

<Hl color="27F538" :alpha="40" :floating="false" :props="{class: 'text-3xl'}">Testing</Hl>
