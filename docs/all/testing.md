---
title: Testing
secret: true
---

<script setup>

import {inject} from "vue"

const vocabulary = inject("agitpropgalleria")

</script>

# Testing

<TestGallery :value="vocabulary" :buttons="[{label: 'Full Imgur Album', variant: 'link', class: 'w-full', as: 'a', href: 'https://imgur.com/a/jacques-ellul-propaganda-agitprop-words-terms-YCtfyDp', target: '_blank'}]" :galleriaProps="{showIndicators: false}" />
