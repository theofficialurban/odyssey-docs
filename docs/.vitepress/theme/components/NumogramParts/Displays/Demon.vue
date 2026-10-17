<script setup lang="ts">
import Label from "primevue/label";
import Fieldset from "primevue/fieldset";
import Numogram, { type NumogramDemon } from "../../../../Numogram";

interface Props {
  demon: NumogramDemon;
}
const { demon } = defineProps<Props>();
</script>

<template>
  <Fieldset v-if="demon" legend="Syzygetic Demon" class="text-sm text-zinc-200">
    <div class="flex flex-col text-sm p-2">
      <div class="flex justify-between">
        <span class="text-color">Name</span>
        <span class="text-muted-color">{{ demon.name }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-color">Imp (Second Number Root)</span>
        <span class="text-muted-color">{{ demon.imp }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-color">Is Syzergetic?</span>
        <span class="text-muted-color">{{
          demon.isSyzygetic ? "Yes" : "No"
        }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-color">Matrix ID</span>
        <span class="text-muted-color">{{ demon.matrixId }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-color">Pitch</span>
        <span class="text-muted-color">{{ demon.pitch }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-color">Lore</span>
        <span class="text-muted-color px-4">{{ demon.lore }}</span>
      </div>
    </div>
  </Fieldset>
</template>
