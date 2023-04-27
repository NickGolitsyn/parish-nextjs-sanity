import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about/about";
import Contact from "./contact/contact";
import CoverImage from "@/components/coverimage";
import Button from "@/components/button";

export default async function IndexPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return(
    <>
      <CoverImage settings={settings} />
      <Button url={'/services'} message={'Services'} />
      <About settings={settings} authors={authors} />
      <Button url={'https://www.paypal.com/paypalme/nickgolitsyn'} message={'Donate'} />
      <Contact settings={settings} />
      {/* <HomePage posts={posts} /> */}
    </>
  );
}

// export const revalidate = 60;
