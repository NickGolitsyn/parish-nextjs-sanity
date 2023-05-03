import { getContact } from "@/lib/sanity/client";
import Contact from "./contact";

export default async function ContactPage() {
  const contact = await getContact();
  return <Contact contact={contact} />;
}

export const revalidate = 60;
