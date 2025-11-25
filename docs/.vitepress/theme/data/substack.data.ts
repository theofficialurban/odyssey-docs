import { PreviewPost, SubstackClient } from "substack-api";
import { defineLoader, loadEnv } from "vitepress";
import { SubstackDataProvider } from "../../utils";

const env = loadEnv("", "docs", ["SUBSTACK"]);

declare const data: SubstackDataProvider;
export { data };

export default defineLoader({
  async load(): Promise<SubstackDataProvider> {
    const client = new SubstackClient({
      apiKey: env.SUBSTACK_API,
      hostname: env.SUBSTACK_HOSTNAME,
    });
    //const postsMap: PostsMap = new Map<number, PreviewPost>([]);
    let postsArray: PreviewPost[] = [];
    const ownProfile = await client.profileForId(216258227);
    //const adminProfile = await client.ownProfile();

    return {
      ownProfile,
      posts: postsArray,
    };
  },
});
