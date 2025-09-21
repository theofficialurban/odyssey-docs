import { ComputedRef } from "vue";

export interface Collection {
  hasItems: (items?: any[], tags?: {}) => boolean;
  pages: any;
  page: ComputedRef<any>;
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
