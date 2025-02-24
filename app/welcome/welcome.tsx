import { NavBar } from "~/components/Navbar";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Button } from "~/components/Button";
import { InfiniteMovingCards } from "~/components/InifinitMoving";
import { BasicGallery } from "~/components/BasicGallery";
import { BasicFooter } from "~/components/BasicFooter";

const companies = [
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
];

export function Welcome() {
  return (
    <main>
      <NavBar />
      <div className="max-w-7xl flex gap-20 min-h-[70vh] items-center px-4 md:px-[5%] xl:px-0 mx-auto">
        <div>
          <h1 className="text-6xl uppercase family-oswald font-semibold leading-tight mb-12 ">
            Llevamos el alto rendimiento sostenible del deporte de tu vida
          </h1>
          <div className="flex gap-6">
            <Button label="Explora nuestros programas" />
            <Button variant="outline" label="Contáctanos" />{" "}
          </div>
        </div>
        <div>
          <img src="/hero.png" />
        </div>
      </div>
      <Companies />
      <Comparation />
      <Programas />
      <Model />
      <Piia />
      <Data />
      <Comments />
      <Cta />
      <BasicFooter />
    </main>
  );
}

const Piia = () => {
  return (
    <section className="max-w-7xl mx-auto  text-center py-40">
      <h2 className=" text-4xl uppercase family-oswald font-semibold mb-6">
        Conoce a Piia: Nuestra entrenadora digital de alto rendimiento
        sostenible
      </h2>
      <img
        className="mt-16 rounded-4xl w-full h-[540px] object-cover"
        src="https://images.pexels.com/photos/4498475/pexels-photo-4498475.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="grid grid-cols-4 mt-6 px-6 gap-16">
        <div className="text-left col-span-1">
          <img className="w-8" alt="check" src="/check2.svg" />
          <h3 className="family-oswald text-xl font-medium my-2">
            Entrenamiento personalizado
          </h3>
          <p className="text-base">
            Lorem ipsu m dolo r sit amet co nse ctetur adipisicing elit.
            Placeat, deleniti? Obcaecati
          </p>
        </div>
        <div className="text-left col-span-1">
          <img className="w-8" alt="check" src="/check2.svg" />
          <h3 className="family-oswald text-xl font-medium my-2">
            Entrenamiento personalizado
          </h3>
          <p className="text-base">
            Lorem ipsum do lor sit amet con sect etur adipisicing elit. Placeat,
            deleniti? Obcaecati
          </p>
        </div>
        <div className="text-left col-span-1">
          <img className="w-8" alt="check" src="/check2.svg" />
          <h3 className="family-oswald text-xl font-medium my-2">
            Entrenamiento personalizado
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit ame t conse cte tur adipisicing elit. Placeat,
            deleniti? Obcaecati
          </p>
        </div>
        <div className="text-left col-span-1 bg-p">
          <img className="w-8" alt="check" src="/check2.svg" />
          <h3 className="family-oswald text-xl font-medium my-2">
            Entrenamiento personalizado
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet co nsec tetur adipisicing elit. Placeat,
            deleniti? Obcaecati
          </p>
        </div>
      </div>
    </section>
  );
};

const Data = () => {
  return (
    <section className="bg-mushell py-20 ">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className=" text-4xl uppercase family-oswald font-semibold mb-6">
          Nuestros cursos de formación para el desarrollo profesional obtienen
          excelentes resultados:
        </h2>
        <div className="flex justify-center gap-40 mt-20">
          <div>
            <span className="text-5xl font-bold family-oswald">+4000</span>
            <p className="family-lato text-2xl">horas de coaching</p>
          </div>
          <div>
            <span className="text-5xl font-bold family-oswald">+4000</span>
            <p className="family-lato text-2xl">horas de coaching</p>
          </div>
          <div>
            <span className="text-5xl font-bold family-oswald">+4000</span>
            <p className="family-lato text-2xl">horas de coaching</p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

const Cta = () => {
  return (
    <section className="bg-[#D91D57] flex flex-col items-center justify-center min-h-[40vh]">
      <span className="text-xl family-oswald text-white uppercase mb-4">
        {" "}
        Sé parte de Potentiia
      </span>
      <h3 className="text-3xl text-white family-oswald uppercase mb-12">
        Estamos cambiando la forma en que trabajan los futuros líderes hoy
      </h3>
      <Button variant="white" label="Agendar asesoría" />
    </section>
  );
};

const Comments = () => {
  return (
    <section className="bg-sun py-40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-4xl uppercase family-oswald font-semibold mb-6">
          Casos de éxito y testimonios
        </h2>
        <p className="family-lato  text-2xl ">
          Conoce la historia de algunos de nuestros socios
        </p>

        <div className="mt-20">
          <BasicGallery
            className="bg-transparent"
            items={[
              {
                src: "/comment1.png",
                text: "Dentro del programa de Coaching Deportivo logramos grandes resultados, logramos reavivar la pasión por lo que hacemos, conocernos a nosotros mismos, superar nuestros miedos y enfocarnos en nuestros objetivos, no solo de forma individual, sino como equipo. ",
                name: "Jesus Gallardo, Futbolista profesional",
              },
              {
                src: "/comment2.png",
                text: "Como profesionales llegamos a olvidar la importancia de la salud mental, siendo algo fundamental para lograr nuestros objetivos. El coaching de Alto Rendimiento ha sido clave para lograr el equilibrio entre la salud física y emocional.",
                name: " Psyco Clown, Luchador profesional",
              },
              {
                src: "/comment3.png",
                text: "Mi experiencia con Potentiia ha sido reveladora, ha cambiado la forma de ver mi negocio y de verme a mí misma. El acompañamiento y el uso de herramientas ha marcado un antes y un después en mi carrera y en mi vida.",
                name: "Arturo JTI, Director Regional de Talento Humano de JTI.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Model = () => {
  return (
    <section className="bg-sun py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-4xl uppercase family-oswald font-semibold mb-6">
          Un modelo que transforma el potencial en potencia
        </h2>
        <p className="family-lato  text-2xl ">
          Una serie de protocolos de entrenamiento prácticos , sostenibles y
          escalables, que te dan el poder de optimizar tu salud, bienestar y
          rendimiento.
        </p>

        <div className="flex justify-center">
          <img className="h-[800px]" src="/circle-pt.png" />
        </div>
      </div>
    </section>
  );
};

const Programas = () => {
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-4xl uppercase family-oswald font-semibold mb-6">
          Te entrenamos para desarrollar el súper poder del siglo XXI: Alto
          rendimeinto sostenible
        </h2>
        <p className=" text-2xl family-lato ">
          Rendir tu máxima potencia de forma consistente, cuidando tu salud y
          bienestra, es el super poder que desarrollamos en nuestros programas
          basados en el deporte profesional. Conoce nuestros programas de
          entrtenamiento para optimizar salud, bienestar y rendimiento con
          protocoles prácticos , sostenibles y escalables.
        </p>
        <div className="grid gap-8 grid-cols-3 mt-20">
          <Card
            img="/cover.png"
            title="Programas individuales"
            description="Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus doloribus perferendis
          quod illo eius. Eos laudantium accusantium veniam, quas ullam ea
          deserunt optio quidem at quasi dolorum laboriosam tenetur voluptatum."
          />{" "}
          <Card
            img="/cover.png"
            title="Programas individuales"
            description="Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus doloribus perferendis
          quod illo eius. Eos laudantium accusantium veniam, quas ullam ea
          deserunt optio quidem at quasi dolorum laboriosam tenetur voluptatum."
          />{" "}
          <Card
            img="/cover.png"
            title="Programas individuales"
            description="Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus doloribus perferendis
          quod illo eius. Eos laudantium accusantium veniam, quas ullam ea
          deserunt optio quidem at quasi dolorum laboriosam tenetur voluptatum."
          />{" "}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="col-span-1 transition-all hover:scale-[102%] cursor-pointer rounded-3xl overflow-hidden shadow-[0_4px_44px_0px_rgba(0,0,0,0.2)]">
      <img className="h-" src={img} />
      <div className="text-left p-10">
        <h3 className="text-2xl font-bold family-oswald uppercase">{title}</h3>
        <p className="text-base family-lato font-light mt-4">{description}</p>
      </div>
    </div>
  );
};

const Comparation = () => {
  return (
    <section className="bg-grass py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl uppercase family-oswald font-semibold mb-4">
          ¿También sientes que el mundo avanza más rápido que tú?
        </h2>
        <p className="family-lato text-white/70 text-2xl font-[300]">
          No estás solo, el 70% de las personas económicamente activas en México
          se sienten exactamente igual atravesando una crisis de burnout porque
          su rendimiento no crece a la velocidad del mundo hiperproductivo.
        </p>{" "}
        <p className="family-oswald text-white/70 text-2xl uppercase mt-6">
          Gracias al deporte entendimos los retos del desarrollo humano actual
        </p>
      </div>
      <div className="grid grid-cols-7 max-w-4xl mx-auto mt-12 ">
        <div className="col-span-2 p-6 border-aqua border rounded-l-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-3 p-6 bg-aqua family-oswald text-center text-2xl place-content-center border-b border-grass">
          Metas altas y ambiciosas
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-r-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-l-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-3 p-6 bg-aqua family-oswald text-center text-2xl place-content-center border-y border-grass">
          Altas expectativas por mantener el mejor rendimiento
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-r-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-l-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-3 p-6 bg-aqua family-oswald text-center text-2xl place-content-center border-y border-grass">
          Altos niveles de estrés y cansancio
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-r-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-l-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-3 p-6 bg-aqua family-oswald text-center text-2xl place-content-center border-y border-grass">
          Toma de decisiones bajo presión
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-r-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-l-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
        <div className="col-span-3 p-6 bg-aqua family-oswald text-center text-2xl place-content-center border-t border-grass">
          Trabajo en equipo eficiente para lograr las metas
        </div>
        <div className="col-span-2 p-6 border-aqua border rounded-r-2xl text-aqua place-content-center">
          <img className="w-14 mx-auto" alt="check" src="/check.svg" />
        </div>
      </div>
      <div className="mx-auto w-fit mt-12">
        <Button label="Descarga la guía para gestión de estrés " />{" "}
      </div>
      <img
        src="/ciclista.png"
        className="absolute left-0 -bottom-20 w-[540px]"
      />
      <img
        src="/ciclista.png"
        className="absolute right-0 -bottom-20 w-[540px]"
      />
    </section>
  );
};

const Companies = () => {
  return (
    <section className="pb-10">
      <p className="max-w-7xl family-lato mx-auto text-xl mb-6 text-center">
        +12 años entrenando atletas y equipos deportivos profesionales con
        nuestro <strong>modelo de protocolos de optimización</strong>y hace 10
        años trasladamos ese entrenamiento a corporativos
        <strong>
          {" "}
          transformando el potencial de más de 10,000 colaboradores en máxima
          potencia.
        </strong>
      </p>
      <InfiniteMovingCards items={companies} direction="left" speed="normal" />
    </section>
  );
};
