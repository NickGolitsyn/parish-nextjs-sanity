import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about/about";
import Contact from "./contact/contact";

export default async function IndexPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return(
    <>
      <About settings={settings} authors={authors} />
      <Contact settings={settings} />
      {/* <HomePage posts={posts} /> */}
    </>
  );
}

// export const revalidate = 60;
