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

const buttons = [
    {label: "Imgur Album", severity: "danger", as: "a", href: "#", target: "_blank"}
]

</script>

# Testing

```embed
type: CardEmbed
title: Sorcery as Virtual Mechanics - Stephen Mace, 1999
image: https://pcdn-u.pcloud.com/img/icons-id/120@2x/17.png
description: Download the Source Text from pCloud
url: https://u.pcloud.link/publink/show?code=XZkYUO5ZKkdBsnfuGgRgakFm1Xp24VeSHIPk
```

<NonHeading v-tooltip.bottom="{
        value: 'PrimeVue Rocks',
        pt: {
            arrow: {
                style: {
                    borderBottomColor: 'var(--p-primary-color)'
                }
            },
            text: '!bg-primary !text-primary-contrast !font-medium'
        }
    }">Hello world</NonHeading>

## Something else

<ImgurGalleria :value="products" :custom="false">
    
</ImgurGalleria>
