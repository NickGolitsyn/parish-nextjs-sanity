import Container from "@/components/container";

export default function WelcomeTitle({ settings }) {
  const lines = settings?.welcomeTitle.split('\n');
  return (
    <Container>
      <div>
        {lines.map((line, index) => {
          let style = {};

          // Apply different styles based on the index
          if (index === 0) {
            style = { fontStyle: 'italic' };
          } else if (index === 1) {
            style = { textTransform: 'uppercase' };
          }

          return (
            <h1 key={index} style={style} id="about" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {line}
            </h1>
          );
        })}
      </div>
      <h2 id="about" className="mt-2 mb-3 text-l font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-2xl dark:text-white">
        An Orthodox parish serving <br/>
        Norwich & East Anglia
      </h2>
    </Container>
  );
}
