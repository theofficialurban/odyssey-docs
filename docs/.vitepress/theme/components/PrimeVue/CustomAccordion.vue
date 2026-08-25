<script setup lang="ts">
import Accordion, { type AccordionProps } from "primevue/accordion";
import AccordionPanel, {
  type AccordionPanelProps,
} from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

interface Tab {
  title: string;
  content: string;
  value: string | number;
  escape?: boolean;
  props?: AccordionPanelProps;
}
interface Props {
  tabs: Tab[];
  props?: AccordionProps;
}
const { tabs = [], props = {} } = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center">
    <PVCard class="w-full">
      <template #title v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template #subtitle v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </template>
      <template #content>
        <Accordion v-bind="{ multiple: true, ...props }">
          <AccordionPanel
            v-for="tab in tabs"
            v-bind="{ key: tab.title, value: tab.value, ...tab.props }"
          >
            <slot
              name="content"
              :tab="tab"
              :components="{ AH: AccordionHeader, AC: AccordionContent }"
            >
              <AccordionHeader>{{ tab.title }}</AccordionHeader>
              <AccordionContent>
                <p class="m-0" v-if="!tab.escape">{{ tab.content }}</p>
                <div
                  class="m-0"
                  v-else-if="tab.escape === true"
                  v-html="tab.content"
                ></div>
              </AccordionContent>
            </slot>
          </AccordionPanel>
        </Accordion>
      </template>
      <template #footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </template>
    </PVCard>
  </div>
</template>
