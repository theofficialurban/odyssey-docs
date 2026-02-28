---
title: Testing
secret: true
---

<script setup>
import {EsotericSymbol} from "../.vitepress/Esoteric.ts"
import {inject} from "vue"

const theObject = inject(EsotericSymbol)
const FireIcon = theObject.Fire.icon()
const WaterIcon = theObject.Water.icon({className: "w-8 h-8", includeName: true})
const cardinalFire = theObject.Fire.Cardinal
const CFIcon = cardinalFire.icon({includeName: true})
</script>

# Test

<FireIcon />

<WaterIcon />

<CFIcon />
