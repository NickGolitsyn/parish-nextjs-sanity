import { getAbout } from "@/lib/sanity/client";
import AboutSaints from "../aboutSaints";

export default async function AboutPage() {
  const about = await getAbout();
  return <AboutSaints about={about} />;
}

export const revalidate = 60;
