import { PreviewPost } from "substack-api";
import { loadEnv } from "vitepress";
import { defineAsyncComponent, defineComponent, render } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";

const env = loadEnv("", "docs", ["SUBSTACK"]);

export async function fetchPosts(
  limit: number = 10,
  offset: number = 0,
  additionalHeaders: Record<string, any> = {}
): Promise<PreviewPost[]> {
  const hostname = env.SUBSTACK_HOSTNAME;
  const key = env.SUBSTACK_API;
  const apiUrl = `https://${hostname}/api/v1/posts?limit=${limit}&offset=${offset}`;
  const response = await fetch(apiUrl, {
    headers: {
      Cookie: `connect.sid=${key}`,
      "Content-Type": "application/json",
      ...additionalHeaders,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchPost(
  postSlug: string,
  additionalHeaders: Record<string, any> = {}
): Promise<PreviewPost> {
  const hostname = env.SUBSTACK_HOSTNAME;
  const key = env.SUBSTACK_API;
  const apiUrl = `https://${hostname}/api/v1/posts/${postSlug}`;
  const response = await fetch(apiUrl, {
    headers: {
      Cookie: `connect.sid=${key}`,
      "Content-Type": "application/json",
      ...additionalHeaders,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
