import Image from "next/image";

export default function Carta() {
  return (
    <section
      id="carta"
      className="bg-cart bg-cover lg:bg-bottom pt-20 flex flex-col items-center"
    >
      <Image
        src="/images/menu.png"
        height={90}
        width={128}
        alt="Nuestra carta"
      />
      <h2 className="pt-8">Nuestra Carta</h2>

      <Image
        src="/images/menu-table.png"
        alt="Tabla Menú"
        width={590}
        height={690}
      />

      {/* <Modal src={modalSrc}>
    <img {src} alt="Tabla Menú" class="w-1/2 mx-auto">
  </Modal> */}
    </section>
  );
}
