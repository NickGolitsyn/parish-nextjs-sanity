import { getActivities } from "@/lib/sanity/client";
import Activities from "../../services/activities";

export default async function ServicesPage() {
  const activities = await getActivities();
  return (
    <>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Past Activities
      </h1>
      <Activities activities={activities} filtered={false} />
    </>
  );
}

export const revalidate = 60;