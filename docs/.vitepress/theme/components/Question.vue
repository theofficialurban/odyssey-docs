<script lang="ts" setup>
import Msg, { type MessageProps } from "primevue/message";
import QuestionMark from "@primeicons/vue/question-circle";
import { type StyleValue } from "vue";

interface Props extends MessageProps {
  class?: string;
  style?: StyleValue;
}
const {
  class: className = "",
  variant = "simple",
  severity = "warn",
  closable = false,
  style,
  ...props
} = defineProps<Props>();
</script>

<template>
  <Msg
    :class="className"
    :style="style"
    :variant
    :severity
    :closable
    v-bind="props"
  >
    <template #icon>
      <slot name="icon">
        <QuestionMark />
      </slot>
    </template>
    <slot>Question</slot>
  </Msg>
</template>
