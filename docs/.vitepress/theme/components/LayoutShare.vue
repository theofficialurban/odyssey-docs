<script setup lang="ts">
import { useData } from "vitepress";
import VPLayout from "@lando/vitepress-theme-default-plus/components/VPLLayout.vue";
import DefaultTheme from "vitepress/theme";
import VPSideBarItem from "vitepress/dist/client/theme-default/components/VPSidebarItem.vue";
import Alert from "@lando/vitepress-theme-default-plus/components/VPLAlert.vue";
import CollectionHeader from "@lando/vitepress-theme-default-plus/components/VPLCollectionHeader.vue";
import MailChimp from "@lando/vitepress-theme-default-plus/components/VPLMailChimp.vue";
import PostHeader from "@lando/vitepress-theme-default-plus/components/VPLPostHeader.vue";
import Tags from "@lando/vitepress-theme-default-plus/components/VPLCollectionItemTags.vue";
import { computed, onMounted, Ref, ref, watch, watchEffect } from "vue";

const { Layout } = DefaultTheme;

let alertKey: Ref<string | null> = ref(null);
let jobsKeyRef: Ref<string | null> = ref(null);
let sponsorsKeyRef: Ref<string | null> = ref(null);
let tagsKeyRef: Ref<string | null> = ref(null);
const { frontmatter, page, theme } = useData();

const alert = computed(
  () => frontmatter.value.alert ?? theme.value.alert ?? false
);
const header = computed(() => frontmatter.value.collection || "");
const headerClass = computed(() =>
  frontmatter.value.collection
    ? `collection-${frontmatter.value.collection}`
    : ""
);
const mailchimp = computed(() =>
  frontmatter.value?.mailchimp?.action ? frontmatter.value.mailchimp : false
);
const sidebarEnder = computed(() => theme.value.sidebarEnder ?? false);

watch(
  () => page.value.relativePath,
  () => {
    alertKey.value = page.value.relativePath;
    jobsKeyRef.value = page.value.relativePath;
    sponsorsKeyRef.value = page.value.relativePath;
    tagsKeyRef.value = page.value.relativePath;
    pgLayout.value = page.value.frontmatter.layout;
    pgShare.value = page.value.frontmatter.share;
  }
);

const pgLayout = ref(page.value.frontmatter.layout);

const pgShare = ref(page.value.frontmatter.share ?? true);

onMounted(async () => {
  await import("@royalfig/share-button");
});
</script>

<template>
  <Layout>
    <template #layout-top>
      <Alert
        v-if="alert"
        :key="alertKey"
        :content="alert.content"
        :closeable="alert.closeable"
        :type="alert.type"
      />
    </template>
    <template #sidebar-nav-after>
      <div v-if="sidebarEnder !== false" class="sidebar-end">
        <VPSideBarItem :depth="0" :item="sidebarEnder" />
      </div>
    </template>

    <template #doc-before>
      <div v-if="header !== ''" class="collection-header">
        <PostHeader v-if="header === 'post'" />
        <CollectionHeader v-else />
      </div>
      <div v-if="pgShare != false && pgLayout != 'home'">
        <!-- <share-button circle position="left"></share-button> -->
        <!-- <share-button atomic></share-button> -->
      </div>
    </template>

    <template #aside-ads-before>
      <Tags :key="tagsKeyRef" />
      <Jobs :key="jobsKeyRef" />
      <Sponsors :key="sponsorsKeyRef" />
    </template>

    <template #doc-footer-before>
      <Tags v-if="header === 'post'" :key="tagsKeyRef" />
      <div v-if="mailchimp" class="newsletter-wrapper">
        <MailChimp v-bind="mailchimp" />
      </div>
    </template>
  </Layout>
</template>
