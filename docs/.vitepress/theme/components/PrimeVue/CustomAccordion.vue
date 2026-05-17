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
  props?: AccordionPanelProps;
}
interface Props {
  tabs: Tab[];
  props?: AccordionProps;
}
const { tabs = [], props = {} } = defineProps<Props>();
</script>

<template>
  <Accordion v-bind="{ multiple: true, ...props }">
    <AccordionPanel
      v-for="tab in tabs"
      v-bind="{ key: tab.title, value: tab.value, ...tab.props }"
    >
      <AccordionHeader>{{ tab.title }}</AccordionHeader>
      <AccordionContent>
        <p class="m-0">{{ tab.content }}</p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
