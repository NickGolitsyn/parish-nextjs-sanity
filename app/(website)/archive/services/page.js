import { getServices } from "@/lib/sanity/client";
import Service from "../../services/services";
import Button from "@/components/button";

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Past Services
      </h1>
      <Button url={'/services'} message={'Upcoming services'} newPage={false} />
      <Service services={services} filtered={false} />
    </>
  );
}

export const revalidate = 60;