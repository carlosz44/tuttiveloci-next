import Image from "next/image";

export default function Header() {
  const menuItems = [
    { id: "1", link: "#nosotros", name: "Nosotros" },
    { id: "2", link: "#carta", name: "Carta" },
    { id: "3", link: "#contacto", name: "Contacto" },
  ];

  return (
    <header className="fixed w-full p-1 tutti-transitions ">
      <div className="main-layout px-8 hidden md:flex items-center justify-between">
        <div className="flex items-center mr-6">
          <a href="#inicio">
            <Image
              src="/images/logo.png"
              width={64}
              height={64}
              priority
              alt="Tutti Veloci logo"
            />
          </a>
        </div>
        <nav className="flex items-center md:w-auto">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="uppercase text-tutti-text tutti-transitions hover:text-tutti-orange ml-16"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="md:hidden max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="flex items-center">
          <a href="#inicio">
            <Image
              src="/images/logo.png"
              width={64}
              height={64}
              priority
              alt="Tutti Veloci logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
