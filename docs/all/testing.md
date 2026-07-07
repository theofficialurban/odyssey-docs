---
title: Testing
secret: true
---

<script setup>

import {inject} from "vue"
import ImgurCarousel from "../.vitepress/theme/components/PrimeVue/ImgurCarousel.vue"

const vocabulary = inject("agitpropgalleria")

const tooltipContent = `<div class="flex-col gap-3">
    <Nh>Testing Non Heading</Nh>
    <p style="
                  font-size: 10px;
                  color: #cccccc;
                  line-break: anywhere;
                  word-break: normal;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  font-family:
                    Interstate,
                    Lucida Grande,
                    Lucida Sans Unicode,
                    Lucida Sans,
                    Garuda,
                    Verdana,
                    Tahoma,
                    sans-serif;
                  font-weight: 100;
                ">Some word definition here</p>
</div>`;

</script>

# Testing

## Accordion

<Accordion :tabs="[{title: 'Testing 1', content: 'Some content', value: 0}, {title: 'Testing 2', content: 'Some content', value: 1}]" />

## Cards

<Grid>
<NewCard title="DMH2ND Research Project" img="https://cdn.bio.link/uploads/profile_pictures/2024-05-18/ZVUrajULPGCAzPBqeZpkxSNsLiyvy3CU.png" description="DM Hutchins 2nd Digital Occult Library Research Project - Terabytes of esoteric research materials," href="https://bio.link/dmh2nd" />

<NewCard title="Authored by Bill Cooper" img="https://www.gstatic.com/images/branding/productlogos/drive_2026/v1/web-48dp/logo_drive_2026_color_1x_web_48dp.png" description="" href="https://drive.google.com/drive/folders/12Q1NkAEEkimrp7zkTrJ4_3V_zN5hVdWh?usp=drive_link" />

<NewCard title="Testing" description="I don't know" href="../bible/angels-and-demons.html" :preview="true" />
</Grid>

## Message Test

<Message size="small" icon="pi pi-send" severity="info">Hello</Message>

<Message size="small" severity="error">Testing</Message>

This is a test for inline <Message size="small" severity="error">Testing</Message>

## Highlight test

<Hl>Testing</Hl>
<Hl v-tooltip.top="'Testing tooltip'" :floating="false">Testing</Hl>

<Hl color="F54927" :alpha="20" v-tooltip.bottom="{value: tooltipContent, escape: false}">Testing</Hl>
<Hl color="27F538" :alpha="40" :floating="false">Testing</Hl>

<Hl color="27F538" v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" :alpha="40" :floating="false" :props="{class: 'text-3xl'}">Testing</Hl>
