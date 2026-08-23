<template>
  <div class="flex items-center justify-center">
    <InputColor v-model="value">
      <InputColorSwatch
        @click="(e: Event) => op?.toggle(e)"
        style="cursor: pointer"
      >
        <InputColorTransparencyGrid />
        <InputColorSwatchBackground />
      </InputColorSwatch>
      <Popover ref="op">
        <div class="w-72 p-3 space-y-3">
          <InputColorArea>
            <InputColorAreaBackground />
            <InputColorAreaHandle />
          </InputColorArea>
          <InputColorSlider>
            <InputColorTransparencyGrid />
            <InputColorSliderTrack />
            <InputColorSliderHandle />
          </InputColorSlider>
          <InputColorSlider channel="alpha">
            <InputColorTransparencyGrid />
            <InputColorSliderTrack />
            <InputColorSliderHandle />
          </InputColorSlider>
          <div class="flex items-center gap-2">
            <InputColorInput channel="hex" class="flex-1" />
            <InputColorEyeDropper
              iconOnly
              severity="secondary"
              variant="outlined"
            >
              <template #default>
                <EyeDropper />
              </template>
            </InputColorEyeDropper>
          </div>
        </div>
      </Popover>
    </InputColor>
  </div>
</template>

<script setup lang="ts">
import EyeDropper from "@primeicons/vue/eye-dropper";
import {
  type VNodeRef,
  useTemplateRef,
  type Ref,
  type ComponentInstance,
  ShallowRef,
} from "vue";
import {
  InputColor,
  InputColorArea,
  InputColorAreaBackground,
  InputColorSwatch,
  InputColorSwatchBackground,
  InputColorTransparencyGrid,
  InputColorAreaHandle,
  InputColorSlider,
  InputColorSliderTrack,
  InputColorSliderHandle,
  InputColorInput,
  InputColorEyeDropper,
} from "primevue";
import Popover from "primevue/popover";
import { ref } from "vue";
type PopoverType = InstanceType<typeof Popover>;
const value = ref("#0099ff");
const op = useTemplateRef<PopoverType>("op");
//const op = defineModel<VNodeRef | null>("popoverRef", {default: null})
//const value = defineModel<string>("value", {default: "#0099ff"})
defineExpose<{
  value: Ref<string, string>;
  op: Readonly<ShallowRef<PopoverType | null>>;
}>({ value, op });
</script>
