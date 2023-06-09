import { getServices } from "@/lib/sanity/client";
import Service from "./services";
import Button from "@/components/button";

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Services
      </h1>
      <Button url={'/archive/services'} message={'Past services'} newPage={false} />
      <Service services={services} filtered={true} />;
    </>
  )
}

export const revalidate = 60;