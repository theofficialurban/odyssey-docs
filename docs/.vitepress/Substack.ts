import { SubstackClient } from "substack-api";
import { loadEnv } from "vitepress";
import { Env } from "./utils";

const client: SubstackClient = new SubstackClient({
  apiKey: Env.VITE_SUBSTACK_API,
  hostname: "theofficialurban.substack.com",
});

export default client;
