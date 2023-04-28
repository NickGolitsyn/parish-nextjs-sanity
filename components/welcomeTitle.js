import Container from "@/components/container";

export default function WelcomeTitle({ settings }) {
  return (
    <Container>
      <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        {settings?.welcomeTitle}
      </h1>
      <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Everyone is welcome.
      </h1>
    </Container>
  );
}
