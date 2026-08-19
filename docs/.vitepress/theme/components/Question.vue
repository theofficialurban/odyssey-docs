<script lang="ts" setup>
import Msg, { type MessageProps } from "primevue/message";
import QuestionMark from "@primeicons/vue/question-circle";
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
    severity: "warn",
    closable: false,
  },
} = defineProps<Props>();
</script>

<template>
  <Msg :class="className" :style="style" v-bind="props">
    <template #icon>
      <slot name="icon">
        <QuestionMark />
      </slot>
    </template>
    <slot>Question</slot>
  </Msg>
</template>
