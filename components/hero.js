import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen bg-bottom bg-cover bg-no-repeat flex flex-col p-2 justify-center items-center bg-hero"
    >
      <div className="relative h-1/2 w-3/4 lg:w-1/2 ">
        <Image
          src="/images/tutti-veloci-logo.png"
          alt="Tutti Veloci"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <button className="btn-outline btn-outline-color" type="button">
        Hacer Pedido
      </button>
    </section>
  );
}
