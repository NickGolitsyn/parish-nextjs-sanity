import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t dark:border-gray-800 bg-navbar border-8 border-solid border-golden w-full">
      <div className="text-center text-sm">
        Copyright © {props?.copyright}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
