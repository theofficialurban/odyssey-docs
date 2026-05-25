---
title: Testing
secret: true
---

<script setup>

// import { useDialog } from "primevue/usedialog"
// import { h, resolveComponent } from 'vue'

// const CardComp = resolveComponent("Card")
// const RenderedCard = h(CardComp, {
//     title: "Test",
//     description: "Test",
//     href: "#"
// })
// const dialog = useDialog()
// const showProducts = () => {
//     dialog.open(CardComp, {
//         props: {
//             title: 'Test Title',
//             description: 'Sup',
//             href: '#'
//         }
//     });
// }
// console.log(CardComp, dialog)
</script>

# Testing

<Accordion :tabs="[{title: 'Test', content: 'Test', value: 0}, {title: 'Test 2', content: 'Test 2', value: 1}]" />

## Highlight Test

<mark class="floating" color="green">Testing</mark>

<mark class="floating" color="yellow">Testing</mark>

<div class="highlightr-floating"><mark :style="{background: '#FF5582A6'}">Testing</mark></div>

<div class="highlightr-floating"><mark style="background: #FF5582A6;">Testing</mark></div>
