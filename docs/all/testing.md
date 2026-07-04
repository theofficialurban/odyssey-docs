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

## Accordion

<Accordion :tabs="[{title: 'Testing 1', content: 'Some content', value: 0}, {title: 'Testing 2', content: 'Some content', value: 1}]" />

## Message Test

<Message size="small" icon="pi pi-send" severity="info">Hello</Message>

<Message size="small" severity="error">Testing</Message>

This is a test for inline <Message size="small" severity="error">Testing</Message>

## Highlight test

<Hl>Testing</Hl>
<Hl v-tooltip.top="'Testing tooltip'" :floating="false">Testing</Hl>

<Hl color="F54927" :alpha="20">Testing</Hl>
<Hl color="27F538" :alpha="40" :floating="false">Testing</Hl>

<Hl color="27F538" v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" :alpha="40" :floating="false" :props="{class: 'text-3xl'}">Testing</Hl>
