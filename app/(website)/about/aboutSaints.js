import Container from "@/components/container";

export default function AboutSaints({ about }) {
  return (
    <Container>
      <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About Our Saints
      </h1>
      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>{about?.aboutSaints || `We belong to the Romanian Orthodox Metropolis of Western and Southern Europe  (part of the Romanian Patriarchate) led by His Eminence Iosif, Archbishop and Metropolitan.
Our parish was inaugurated on the 19th of December 2010.`}</p>
      </div>
    </Container>
  );
}
