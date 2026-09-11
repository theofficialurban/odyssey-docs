<script lang="ts" setup>
import Msg, { type MessageProps } from "primevue/message";
import FlagIcon from "@primeicons/vue/flag";
import { type StyleValue } from "vue";

interface Props {
  class?: string;
  style?: StyleValue;
  props?: MessageProps;
}
const {
  class: className = "",

  style,
  props = {
    variant: "simple",
    severity: "success",
    closable: false,
  },
} = defineProps<Props>();
</script>

<template>
  <Msg :class="className" :style="style" v-bind="props">
    <template #icon>
      <slot name="icon">
        <FlagIcon />
      </slot>
    </template>
    <slot>So What</slot>
  </Msg>
</template>
