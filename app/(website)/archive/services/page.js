import { getServices } from "@/lib/sanity/client";
import Service from "../../services/services";

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Past Services
      </h1>
      <Service services={services} filtered={false} />
    </>
  );
}

export const revalidate = 60;