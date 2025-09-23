import { ComputedRef } from "vue";
import type { PageData } from "vitepress";

export interface CollectionDefinition<T extends Partial<Page> = Partial<Page>> {
  frontmatter: T;
  icon: string;
  iconLink: string;
  patterns: string[] | string;
}
export type DefineCollections = Record<string, CollectionDefinition>;

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
  name: string
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
