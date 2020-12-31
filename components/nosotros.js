import Image from "next/image";

export default function Nosotros() {
  const textabout1 =
    "Somos una empresa en crecimiento que nace de la pasión por el buen gusto y paladar. Apostamos por la máxima calidad usando los mejores ingredientes y adaptandonos a sus requisitos.";
  const textabout2 =
    "Nos especializamos en brindarte la mejor carta con muchas opciones especiales para coffee breaks, desayunos corporativos, caterings corporativos y eventos especiales.";

  return (
    <section
      id="nosotros"
      className="main-layout py-20 flex flex-col items-center"
    >
      <Image src="/images/us.png" height={90} width={128} alt="Nosotros" />
      <h2 className="pt-8">Nosotros</h2>
      <p className="my-8 px-4">
        Apasionados por brindarte la mejor experiencia gastronómica.
      </p>
      <div className="sm:flex p-4">
        <div className="sm:px-8 sm:w-1/2 pb-12 sm:pb-0">
          <Image
            src="/images/about-1.jpg"
            height={285}
            width={560}
            alt="Quiénes somos"
            className="shadow-xl"
          />
          <h3 className="my-8">¿Quiénes Somos?</h3>
          <p>{textabout1}</p>
        </div>
        <div className="sm:px-8 sm:w-1/2">
          <Image
            src="/images/about-2.jpg"
            height={285}
            width={560}
            alt="Quiénes somos"
            className="shadow-xl"
          />
          <h3 className="my-8">¿Qué Hacemos?</h3>
          <p>{textabout2}</p>
        </div>
      </div>
    </section>
  );
}
