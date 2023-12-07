import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <footer className="bg-navbar w-screen grid footer-grid py-3">
      <div></div>
      <div className="text-center text-sm">
        Copyright © {props?.copyright}
      </div>
      <div className="ml-auto mr-3 my-auto">
        <ThemeSwitch />
      </div>
    </footer>
  );
}
