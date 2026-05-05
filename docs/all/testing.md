---
title: Testing
secret: true
---

<script setup>

const products = [
    {image: "https://i.imgur.com/lPT4ge3.jpeg", name: "Test 1", title: "Test", caption: "Testing"},
    {image: "https://i.imgur.com/Yzp9qHz.jpeg", name: "Test 2", title: "Test", caption: "Testing"},
    {image: "https://i.imgur.com/BmkXInc.jpeg", name: "Test 3", title: "Test", caption: "Testing"}
]

</script>

# Testing

<!-- <Galleria :value="products" :numVisible="5" :showThumbnails="false" :showIndicators="true" circular autoPlay containerClass="mx-auto max-w-[650px]">
    <template #header>
        <div class="m-3">Testing</div>
    </template>
    <template #item="slotProps">
        <img :src="slotProps.item.image" :alt="slotProps.item.name" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.image" width="25px" class="max-w-[25px]" :alt="slotProps.item.alt" />
    </template>
    <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
    </template>
</Galleria> -->

<ImgurGalleria :value="products" :galleriaProps="{showIndicators: true, showIndicatorsOnItem: true, indicatorsPosition: 'top'}">
    <template #header>
        <div>Testing</div>
    </template>
</ImgurGalleria>

## Carousel AGain

:::panel Testing

Panel works fine

:::
