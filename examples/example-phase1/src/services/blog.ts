// Constants
import { BLOGS_URL } from "@/constants/url";

// Types
import { BlogItemType } from "@/types";

// Utils
import { httpRequest } from "@/utils";

export const getBlogItems = async (): Promise<BlogItemType[]> =>
  await httpRequest<BlogItemType[]>(BLOGS_URL, {
    next: {
      tags: ["blogs"],
    },
  });
