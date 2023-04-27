import Container from "@/components/container";

export default function WelcomeBody({ settings }) {
  return (
    <Container>
      <div className="mx-auto prose text-center dark:prose-invert">
        <p>{settings?.welcomeMessage}</p>
      </div>
    </Container>
  );
}
