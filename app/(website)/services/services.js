import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { formatDateStrings } from '../../../utils/dateFormat'

export default function Service({ authors, settings, services }) {

  // const myDateArray = [
  //   { myDate: '2023-04-16', serviceDescription: 'Easter', _key: '6a508b013a4a' },
  //   { myDate: '2023-04-23', serviceDescription: "Sunday's Service @ 9 am", _key: '4d0b2e8b1c55' }
  // ];
  // const formattedDateArray = formatDateStrings(myDateArray);
  return (
    <Container>
      {/* <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About Our Parish
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a parish in Norfolk.</p>
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>{settings?.about || `About our parish.`}</p>
        <p>
          <Link href="#contact">Get in touch</Link>
        </p>
      </div> */}
      {/* <div>
        {formattedDateArray.map(item => (
          <div key={item._key}>
            <p>Date: {item.myDate}</p>
            <p>Description: {item.serviceDescription}</p>
          </div>
        ))}
      </div> */}
      <div>{services?.servicelist.map((e) =>
        <div key={e._key}>
          <h1>{e.myDate}</h1>
          <h1>{e.serviceDescription}</h1>
        </div>
      )}</div>
    </Container>
  );
}
