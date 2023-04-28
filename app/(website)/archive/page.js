import Archive from "./archive";

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  // return <Archive posts={posts} />;
  return <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
  Archive
</h1>;
}

// export const revalidate = 60;
