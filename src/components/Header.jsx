import icon from "../../public/convert-icon.svg";

function Header() {
  return (
    <header className="h-1/6 w-full flex items-center gap-2 mb-8">
      <img src={icon} className="w-14" />
      <h1 className="text-cyan-300">Base Converter</h1>
    </header>
  );
}

export default Header;
