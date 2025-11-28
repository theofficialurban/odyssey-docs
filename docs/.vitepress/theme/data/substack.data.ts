import { PreviewPost, SubstackClient } from "substack-api";
import { defineLoader, loadEnv } from "vitepress";
import { SubstackDataProvider } from "../../utils";

const env = loadEnv("", "docs", ["SUBSTACK"]);

declare const data: SubstackDataProvider;
export { data };

async function fetchPosts(
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

async function fetchPost(
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

export default defineLoader({
  async load(): Promise<SubstackDataProvider> {
    const client = new SubstackClient({
      apiKey: env.SUBSTACK_API,
      hostname: env.SUBSTACK_HOSTNAME,
      substackBaseUrl: "",
    });
    //const postsMap: PostsMap = new Map<number, PreviewPost>([]);
    let postsArray: PreviewPost[] = [];
    const ownProfile = await client.profileForId(216258227);

    return {
      ownProfile,
      posts: postsArray,
    };
  },
});
