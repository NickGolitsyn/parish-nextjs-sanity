import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About Our Parish
      </h1>
      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>{settings?.about || `About our parish.`}</p>
        <p>
          <Link href="#contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
