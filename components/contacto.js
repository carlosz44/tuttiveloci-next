import Image from "next/image";

export default function Contacto() {
  return (
    <section
      id="contacto"
      class="main-layout mx-auto py-20 flex flex-col items-center"
    >
      <Image
        src="/images/contact.png"
        height={90}
        width={128}
        alt="Contáctanos"
      />
      <h2 className="pt-8">Contáctanos</h2>
      <div class="flex flex-row items-center w-full px-4 py-8">
        <div class="hidden md:block md:w-1/2 px-4">
          <Image
            src="/images/chicken-pie.jpg"
            height={400}
            width={592}
            alt="Contáctanos"
          />
        </div>
        <div class="w-full md:w-1/2 md:px-8">{/* <Form /> */}</div>
      </div>
    </section>
  );
}
