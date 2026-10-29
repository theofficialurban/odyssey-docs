<script setup lang="ts">
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import PVCard from "primevue/card";
import KeyFilter from "primevue/keyfilter";
import Label from "primevue/label";
const blockNumeric = { pattern: /^[0-9+]|[(:)]$/, validateOnly: true };
import { onMounted, ref } from "vue";
import SieveEra from "../../../Xenotation";
const inText = ref<string>("");
const outText = ref<string>("");
const tx = new SieveEra();

onMounted(() => {
  console.log(tx.xenote(777));
});
</script>

<template>
  <PVCard class="w-full mx-auto py-3 overflow-hidden">
    <template #header>
      <img
        class="w-full object-cover"
        alt="user header"
        src="https://i.imgur.com/u1iQZqa.png"
      />
    </template>
    <template #content>
      <div class="grid grid-flow-row gap-4">
        <!-- <img src="https://i.imgur.com/u1iQZqa.png" class="w-full my-4" /> -->
        <h1 v-html="outText"></h1>
        <div>
          <Label for="numkeys" class="font-bold! block mb-2">Enter</Label>
          <InputText
            id="numkeys"
            @keyup="
              (p) => {
                tx._keyUp(p, (result) => {
                  if (result) outText = result;
                });
              }
            "
            v-model="inText"
            v-keyfilter="blockNumeric"
            fluid
          />
        </div>
        <!-- <div>
          <Label for="numkeys" class="font-bold! block mb-2">Result</Label>
          <InputText
            id="outkeys"
            v-model="outText"
            v-keyfilter="blockNumeric"
            fluid
            readonly
          />
        </div> -->

        <details class="details custom-block">
          <summary>Expand for Links</summary>
          <div>
            <ol>
              <li>
                <a
                  href="https://kyl.neocities.org/books/[TEC%20LE]%20one%20two%20many%20-%20on%20nick%20land's%20numbering%20practice.pdf"
                  target="_blank"
                  >Nick Land's Numbering System</a
                >
              </li>
              <li>
                <a
                  href="https://odyssey-docs.vercel.app/technical/numogram.html"
                  target="_blank"
                  >https://odyssey-docs.vercel.app/technical/numogram.html</a
                >
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20220726202346/https://mvupress.net/txconverter.html"
                  target="_blank"
                  >https://web.archive.org/web/20220726202346/https://mvupress.net/txconverter.html</a
                >
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20210925154532/https://mvupress.net/tic-xenotation"
                  target="_blank"
                  >https://web.archive.org/web/20210925154532/https://mvupress.net/tic-xenotation</a
                >/
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20220313170014/https://plutonicsjournal.com"
                  target="_blank"
                  >Plutonics Journal</a
                >
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20210511040650/https://mvupress.net/tic-xenotation/tx-texts/"
                  target="_blank"
                  >https://web.archive.org/web/20210511040650/https://mvupress.net/tic-xenotation/tx-texts/</a
                >
              </li>
            </ol>
          </div>
        </details>
      </div>
    </template>
  </PVCard>
</template>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1em;
  font-family: "Bungee Hairline";
  color: rgb(0, 255, 38);
  font-size: 64px;
  text-align: center;
  font-weight: 700;
}
</style>
