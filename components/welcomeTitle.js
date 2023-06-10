import Container from "@/components/container";

export default function WelcomeTitle({ settings }) {
  return (
    <Container>
      <h1 id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        {settings?.welcomeTitle}
      </h1>
      <h2 id="about" className="mt-2 mb-3 text-l font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-2xl dark:text-white">
        Norwich & East Anglia, Great Britain.
      </h2>
    </Container>
  );
}
