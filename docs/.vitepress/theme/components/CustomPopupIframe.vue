<script setup lang="ts">
import { ref, inject } from "vue";

import { attemptWithDelay, defaultLinkPreviewOptions } from "../../utils";
import { InjectionKey } from "@nolebase/vitepress-plugin-inline-link-preview";

const props = defineProps<{
  href: string;
}>();

// const defaultLinkPreviewPopupOptions = {
//   popupWidth: 600,
//   popupHeight: 480,
//   previewLocalHostName: true,
//   selectorsToBeHided: [
//     ".VPNav",
//     ".VPFooter",
//     ".VPLocalNav",
//     ".VPSidebar",
//     ".VPDocFooter > .prev-next",
//     ".VPLocalNav",
//     ".collection-header",
//   ],
//   popupTeleportTargetSelector: "body",
//   popupDelay: 500,
// };

const defaultLinkPreviewPopupOptions = defaultLinkPreviewOptions;

const options = inject(InjectionKey, defaultLinkPreviewPopupOptions);

const iframeNotReady = ref(true);

async function waitUntilIframeAllMountedAndRendered(
  iframeElement: HTMLIFrameElement
): Promise<Document | null> {
  return await attemptWithDelay<Document | null>(50, 200, () => {
    if (!iframeElement.contentDocument)
      return waitUntilIframeAllMountedAndRendered(iframeElement);
    return iframeElement.contentDocument;
  });
}

async function waitUntilElementSelected(
  iframeDocument: Document,
  selector: string
) {
  return await attemptWithDelay<HTMLElement>(3, 100, () => {
    const targetElement = iframeDocument.querySelector(selector) as HTMLElement;
    if (!targetElement) return null;
    return targetElement;
  });
}

async function trySelect(
  iframeElement: HTMLIFrameElement,
  selector: string
): Promise<{
  selector: string;
  element: HTMLElement | null;
}> {
  const iframeDocument = await waitUntilIframeAllMountedAndRendered(
    iframeElement
  );
  if (!iframeDocument) {
    return {
      selector,
      element: null,
    };
  }

  return {
    selector,
    element: await waitUntilElementSelected(iframeDocument, selector),
  };
}

async function handleIframeOnLoad(e: Event) {
  const iframeElement = e.target as HTMLIFrameElement;
  const toBeHideSelectors =
    options.selectorsToBeHided ||
    defaultLinkPreviewPopupOptions.selectorsToBeHided ||
    [];

  let foundElements: Array<{
    selector: string;
    element: HTMLElement | null;
  }> = [];

  try {
    foundElements = await Promise.all(
      toBeHideSelectors.map((selector) => {
        return trySelect(iframeElement, selector);
      })
    );
  } catch (e) {
    console.error("VPNolebaseInlinePreviewLink:", e);
  }

  foundElements.forEach((element) => {
    if (element.element)
      element.element.style.setProperty("display", "none", "important");
    else
      console.warn(
        `VPNolebaseInlinePreviewLink: desired selecting element with selector '${element.selector}' not found. Consider remove it from 'options.selectorsToBeHided' if it's not constantly rendered.`
      );
  });

  if (options.handleIframeLoaded) {
    if (options.handleIframeLoaded instanceof Promise)
      await options.handleIframeLoaded(window, iframeElement);
    else options.handleIframeLoaded(window, iframeElement);
  }

  setTimeout(() => {
    iframeNotReady.value = false;
  }, 250);
}

// <iframe
//     v-show="!iframeNotReady"
//     border="none"
//     m-0
//     w-full
//     overflow-hidden
//     rounded-lg
//     p-0
//     class="VPNolebaseInlinePreviewLinkPopupIframe"
//     flex="1"
//     :src="props.href"
//     @load="handleIframeOnLoad"
//   />
</script>

<template>
  <iframe
    v-show="!iframeNotReady"
    border="none"
    m-0
    w-full
    overflow-hidden
    rounded-lg
    p-0
    class="VPNolebaseInlinePreviewLinkPopupIframe"
    flex="1"
    :src="props.href"
    @load="handleIframeOnLoad"
  />
  <div
    v-show="iframeNotReady"
    flex="~ col 1"
    m-0
    w-full
    items-center
    justify-center
    p-0
    class="VPNolebaseInlinePreviewLinkPopupLoading bg-$vp-c-bg text-$vp-c-text-1"
  >
    <span i-svg-spinners:3-dots-bounce text-3xl />
  </div>
</template>
