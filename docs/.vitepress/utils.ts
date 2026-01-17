import { ComputedRef, InjectionKey } from "vue";
import { type PageData } from "vitepress";
import { PreviewPost, Profile } from "substack-api";

export interface CollectionDefinition<T extends Partial<Page> = Partial<Page>> {
  frontmatter: T;
  icon: string;
  iconLink: string;
  patterns: string[] | string;
}
export type DefineCollections = Record<string, CollectionDefinition>;

export type PostsMap = Map<number, PreviewPost>;
export interface SubstackDataProvider {
  ownProfile: Profile;
  posts: PreviewPost[];
}

export const SubstackSymbol: InjectionKey<SubstackDataProvider> =
  Symbol("Substack");

export const defaultLinkPreviewOptions = {
  popupWidth: 600,
  popupHeight: 480,
  previewLocalHostName: true,
  selectorsToBeHided: [
    ".VPNav",
    ".VPFooter",
    ".VPLocalNav",
    ".VPSidebar",
    ".VPDocFooter > .prev-next",
    ".VPLocalNav",
    ".collection-header",
  ],
  popupTeleportTargetSelector: "body",
  popupDelay: 500,
};

export type EmbedPlatformBtn = [platform: EmbedPlatform, href: string];

export const PlatformIcons: Record<EmbedPlatform, string> = {
  Rumble: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Watch on Rumble</title><path fill="currentColor" d="M14.453 13.546a1.88 1.88 0 0 0 .275-2.645a2 2 0 0 0-.275-.275A21.2 21.2 0 0 0 10.14 7.85c-1.066-.51-2.256.2-2.426 1.414a23.5 23.5 0 0 0-.14 5.502c.116 1.23 1.292 1.964 2.372 1.492a19.6 19.6 0 0 0 4.506-2.704zm6.932-5.4a5.85 5.85 0 0 1 .014 7.872a26.15 26.15 0 0 1-13.104 7.828a5.116 5.116 0 0 1-6.167-3.578c-1.524-5.2-1.3-11.08.17-16.305C3.07 1.22 5.651-.503 8.308.131c4.925 1.174 9.545 4.196 13.077 8.013z"/></svg>`,
  Odysee: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>Watch on Odysee</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.606 15.236c2.429.845 3.43-4.332 4.784-6.728c2-3.537 5.807-1.624 5.931 2.093c.132 3.945-3.777 8.62-7.177 11.563c-.917.794-.876 1.48.25 2.144c4.173 2.463 5.327 9.08 6.23 12.36c1.41 5.127-7.404 6.47-7.228.648c.074-2.414.59-5.464-4.087-6.33c1.423 10.76-5.408 11.49-10.666 11.514c-4.561.02-4.121-7.099.798-6.779c2.254.147 3.708-1.517 2.691-3.788a60 60 0 0 0-3.539-6.03c.102-.662-4.5 1.492-7.875 4.336c-3.319 2.796-5.906-2.82-2.292-6.48c2.214-2.242 8.572-3.987 8.572-3.987c-.29-4.051-4.318-8.622 2.293-12.959s11.304 3.006 11.314 8.423"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.98 8.259c-2.42.99-4.155 1.553-3.34 4.585c.714 2.654 2.646 3.89 5.732 2.442c2.12-.994 2.933-2.168 2.443-4.137c-.619-2.479-1.933-4.078-4.835-2.89"/></svg>`,
  Raw: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Link</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m0-6h1a6 6 0 0 1 0 12h-1m-6 0H8A6 6 0 0 1 8 6h1"/></svg>`,
  "X-Button": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Twitter/X</title><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>`,
  "X-Timeline": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Twitter/X</title><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>`,
  Bitchute: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Link</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m0-6h1a6 6 0 0 1 0 12h-1m-6 0H8A6 6 0 0 1 8 6h1"/></svg>`,
  Substack: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Watch on Substack</title><path fill="currentColor" d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/></svg>`,
  YouTube: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Youtube-fill SVG Icon</title><g fill="none"><g clip-path="url(#akarIconsYoutubeFill0)"><path fill="currentColor" d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27a3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47a3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494c.137.479.404.916.775 1.269c.371.353.833.608 1.341.743c1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47a3.05 3.05 0 0 0 1.338-.742a2.78 2.78 0 0 0 .765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517M9.602 15.424V8.577l6.26 3.424z"/></g><defs><clipPath id="akarIconsYoutubeFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>`,
};

export type EmbedPlatform =
  | "Rumble"
  | "Odysee"
  | "Bitchute"
  | "Raw"
  | "X-Timeline"
  | "X-Button"
  | "Substack"
  | "YouTube";

export interface Page extends PageData {
  aside: boolean;
  authors: Record<string, unknown>[];
  backLink: boolean;
  collection: string;
  contributors: boolean | Record<string, unknown>[];
  date: string;
  dateTime: string;
  editLink: boolean;
  excerpt: string;
  html: string;
  id: string;
  next: boolean;
  ogimage: string;
  prev: boolean;
  relativePath: string;
  show: boolean;
  sidebar: boolean;
  summary: string;
  tags: Record<string, unknown>[];
  timestamp: string;
  title: string;
  secret?: boolean;
  type: string;
  url: string;
}

export interface Collection {
  hasItems: (items?: any[], tags?: {}) => boolean;
  pages: Page[];
  page: ComputedRef<Page>;
  nextPage: ComputedRef<any>;
  prevnext: ComputedRef<{
    prev:
      | {
          text: any;
          link: any;
        }
      | undefined;
    next:
      | {
          text: any;
          link: any;
        }
      | undefined;
  }>;
  prevPage: ComputedRef<any>;
  path: string;
  tags: {
    [k: string]: any;
  };
}

export function findCollection(
  collections: Record<string, CollectionDefinition>,
  name: string,
): CollectionDefinition | null {
  const f = Object.entries(collections).find(([colName, entry]) => {
    return colName === name;
  });
  if (f !== undefined) {
    return f[1];
  }
  return null;
}

export interface Contributor {
  avatar: string;
  name: string;
  commits: number;
  email: string;
  title: string;
  maintainer: boolean;
  mergeOnly: boolean;
  mergeWith: string;
  org: string;
  orgLink: string;
  desc: string;
  links: Record<string, unknown>[];
  sponsor: string;
}
export interface Contributors {
  merge: "name" | "email" | false;
  debotify?: boolean;
  exclude?: string[] | Partial<Contributor>[];
  include?: string[] | Partial<Contributor>[];
}

export function attemptWithDelay<T>(
  maxTryIterate: number,
  delayMs: number,
  attempt: () => (T | null) | Promise<T | null>,
): Promise<T | null> {
  return new Promise<T | null>((resolve, reject) => {
    let tryIterate = 0;

    function attemptWithDelayInner() {
      tryIterate++;

      try {
        const result = attempt();

        if (result instanceof Promise) {
          result
            .then((result) => {
              if (result) resolve(result);
              else if (tryIterate < maxTryIterate)
                setTimeout(attemptWithDelayInner, delayMs);
              else resolve(null);
            })
            .catch((e) => {
              if (tryIterate < maxTryIterate)
                setTimeout(attemptWithDelayInner, delayMs);
              else reject(e);
            });
        } else {
          if (result) resolve(result);
          else if (tryIterate < maxTryIterate)
            setTimeout(attemptWithDelayInner, delayMs);
          else resolve(null);
        }
      } catch (e) {
        if (tryIterate < maxTryIterate)
          setTimeout(attemptWithDelayInner, delayMs);
        else reject(e);
      }
    }

    attemptWithDelayInner();
  });
}
