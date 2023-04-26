import { getAllAuthors, getServices, getSettings } from "@/lib/sanity/client";
import Service from "./services";

export default async function ServicesPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  const services = await getServices();
  return <Service settings={settings} authors={authors} services={services} />;
}

export const revalidate = 60;