import { getServices } from "@/lib/sanity/client";
import Service from "./services";

export default async function ServicesPage() {
  const services = await getServices();
  return <Service services={services} filtered={true} />;
}

export const revalidate = 60;