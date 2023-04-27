import { getAllAuthors, getAllPosts, getSettings } from "@/lib/sanity/client";
import About from "../about/about";
import Contact from "../contact/contact";
import CoverImage from "@/components/coverimage";
import Button from "@/components/button";
import HomePage from "../home"

export default async function Post() {
  const posts = await getAllPosts()
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return(
    <>
      <HomePage posts={posts} />
    </>
  );
}