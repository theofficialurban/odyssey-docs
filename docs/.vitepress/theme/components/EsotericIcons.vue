<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import {
  type Planets,
  type ZodiacSigns,
  PlanetaryIcons,
  ZodiacIcons,
  type Elements,
  type IconDefaults,
  ElementalIcons,
} from "../../Esoteric";

interface Props {
  planet?: Planets | null;
  sign?: ZodiacSigns | null;
  element?: Elements | null;
  includeName?: boolean;
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

const iconDefaults: Partial<IconDefaults> = {
  Fire: { fill: "red" },
  Water: { fill: "deepskyblue" },
  Earth: { fill: "seagreen" },
  Air: { fill: "yellow" },
  Spirit: { fill: "fuchsia" },
  Aries: { fill: "red" },
  Leo: { fill: "red" },
  Sagittarius: { fill: "red" },
  Pisces: { fill: "deepskyblue" },
  Scorpio: { fill: "deepskyblue" },
  Cancer: { fill: "deepskyblue" },
  Aquarius: { fill: "yellow" },
  Libra: { fill: "yellow" },
  Gemini: { fill: "yellow" },
  Capricorn: { fill: "seagreen" },
  Virgo: { fill: "seagreen" },
  Taurus: { fill: "seagreen" },
  Mercury: { className: "w-6 h-6" },
};

const {
  planet = null,
  sign = null,
  element = null,
  className = "w-4 h-4",
  width = "16",
  includeName = false,
  height = "16",
  fill = "currentColor",
} = defineProps<Props>();

const fillProp = ref<string>(fill);
const widthProp = ref<string>(width);
const heightProp = ref<string>(height);
const classProp = ref<string>(className);

//const planetModel = useTemplateRef<HTMLSpanElement>("planet-ref")
//const zodiacModel = useTemplateRef<HTMLSpanElement>("zodiac-ref")
//const elementModel = useTemplateRef<HTMLSpanElement>("element-ref")
const foundPlanetIcon = computed<string | null>(() => {
  if (planet == null) return null;
  if (sign != null || element != null) return null;
  const found = PlanetaryIcons[planet] ?? null;
  if (found) {
    const hasDefaults = iconDefaults[planet] ?? null;

    if (hasDefaults) {
      if (hasDefaults.fill && fillProp.value === "currentColor")
        fillProp.value = hasDefaults.fill;
      if (hasDefaults.height && heightProp.value == "16")
        heightProp.value = hasDefaults.height;
      if (hasDefaults.width && widthProp.value == "16")
        widthProp.value = hasDefaults.width;
      if (hasDefaults.className && classProp.value == "w-4 h-4")
        classProp.value = hasDefaults.className;
    }
    let fixWH = found.replaceAll("{{fill}}", fillProp.value);
    fixWH = fixWH.replaceAll("{{class}}", classProp.value);
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
    const hasDefaults = iconDefaults[sign] ?? null;

    if (hasDefaults) {
      if (hasDefaults.fill && fillProp.value === "currentColor")
        fillProp.value = hasDefaults.fill;
      if (hasDefaults.height && heightProp.value == "16")
        heightProp.value = hasDefaults.height;
      if (hasDefaults.width && widthProp.value == "16")
        widthProp.value = hasDefaults.width;
      if (hasDefaults.className && classProp.value == "w-4 h-4")
        classProp.value = hasDefaults.className;
    }
    let fixWH = found.replaceAll("{{fill}}", fillProp.value);
    fixWH = fixWH.replaceAll("{{class}}", classProp.value);
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
    const hasDefaults = iconDefaults[element] ?? null;

    if (hasDefaults) {
      if (hasDefaults.fill && fillProp.value === "currentColor")
        fillProp.value = hasDefaults.fill;
      if (hasDefaults.height && heightProp.value == "16")
        heightProp.value = hasDefaults.height;
      if (hasDefaults.width && widthProp.value == "16")
        widthProp.value = hasDefaults.width;
      if (hasDefaults.className && classProp.value == "w-4 h-4")
        classProp.value = hasDefaults.className;
    }
    let fixWH = found.replaceAll("{{fill}}", fillProp.value);
    fixWH = fixWH.replaceAll("{{class}}", classProp.value);
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
    <span v-if="includeName">{{ planet }}</span>
  </div>
  <div class="esoteric-icon" v-else-if="foundZodiacIcon !== null">
    <span class="icon" v-html="foundZodiacIcon"></span>
    <span v-if="includeName">{{ sign }}</span>
  </div>
  <div class="esoteric-icon" v-else-if="foundElementIcon !== null">
    <span class="icon" v-html="foundElementIcon"></span>
    <span v-if="includeName">{{ element }}</span>
  </div>
</template>

<style lang="scss" scoped>
.esoteric-icon {
  gap: 2px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}
</style>
