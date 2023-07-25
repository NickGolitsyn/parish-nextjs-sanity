import { getAllAuthors, getContact, getSettings } from "@/lib/sanity/client";
import Contact from "./contact/contact";
import CoverImage from "@/components/coverimage";
import Button from "@/components/button";
import WelcomeTitle from "@/components/welcomeTitle";
import WelcomeBody from "@/components/welcomeBody";
import ImageComp from "@/components/imagecomp";

export default async function IndexPage() {
  const settings = await getSettings();
  const contact = await getContact();
  return(
    <>
      <div className=" mt-20"></div>
      <CoverImage settings={settings.openGraphImage} />
      <WelcomeTitle settings={settings} />
      <Button url={'/services'} message={'Services'} newPage={false} />
      <WelcomeBody settings={settings} />
      <ImageComp settings={settings.cross} />
      <Button url={'https://www.paypal.com/paypalme/nickgolitsyn'} message={'Donate'} newPage={true} />
      <Contact contact={contact} />
      {/* <HomePage posts={posts} /> */}
    </>
  );
}

export const revalidate = 60;
