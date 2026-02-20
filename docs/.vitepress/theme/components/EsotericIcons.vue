<script setup lang="ts">
import { computed, ref } from "vue";
import {
  type Planets,
  type ZodiacSigns,
  PlanetaryIcons,
  ZodiacIcons,
  type Elements,
  ElementalIcons,
} from "../../Esoteric";

interface Props {
  planet?: Planets | null;
  sign?: ZodiacSigns | null;
  element?: Elements | null;
  width?: string;
  height?: string;
  fill?: string;
}

const {
  planet = null,
  sign = null,
  element = null,
  width = "20",
  height = "20",
  fill = "currentColor",
} = defineProps<Props>();

const foundPlanetIcon = computed<string | null>(() => {
  if (planet == null) return null;
  if (sign != null || element != null) return null;
  const found = PlanetaryIcons[planet] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{fill}}", fill);
    // fixWH = fixWH.replaceAll("{{height}}", height);
    // fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
const foundZodiacIcon = computed<string | null>(() => {
  if (sign == null) return null;
  if (planet != null || element != null) return null;
  const found = ZodiacIcons[sign] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{fill}}", fill);
    //found.replaceAll("{{width}}", width);
    //fixWH = fixWH.replaceAll("{{height}}", height);
    //fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
const foundElementIcon = computed<string | null>(() => {
  if (element == null) return null;
  if (sign != null || planet != null) return null;
  const found = ElementalIcons[element] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{fill}}", fill);
    // fixWH = fixWH.replaceAll("{{height}}", height);
    // fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
</script>

<template>
  <div v-if="!foundElementIcon && !foundPlanetIcon && !foundZodiacIcon">
    <span>Error finding Icon</span>
  </div>
  <div class="esoteric-icon" v-else-if="foundPlanetIcon !== null">
    <span class="icon" v-html="foundPlanetIcon"></span>
  </div>
  <div class="esoteric-icon" v-else-if="foundZodiacIcon !== null">
    <span class="icon" v-html="foundZodiacIcon"></span>
  </div>
  <div class="esoteric-icon" v-else-if="foundElementIcon !== null">
    <span class="icon" v-html="foundElementIcon"></span>
  </div>
</template>

<style lang="scss" scoped>
.esoteric-icon {
  gap: 2px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    color: var(--vp-c-brand-1);
  }
  .icon {
    width: v-bind(width);
    height: v-bind(height);
  }
}
</style>
