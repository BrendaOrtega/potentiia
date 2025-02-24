import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const BasicFooter = () => {
  return (
    <section>
      <div className="bg-black h-fit px-4 md:px-[5%] xl:px-0  ">
        <div className="h-full max-w-7xl gap-y-10 md:gap-y-0   py-12 md:py-20 px-4 mx-auto grid grid-cols-12">
          <div className="col-span-12 md:col-span-5">
            <h1 className=" family-oswald uppercase text-2xl md:text-3xl text-white">
              Suscríbete para recibir la información de nuestros programas
            </h1>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-3 ">
            <h3 className="text-white mb-3 family-oswald uppercase">
              Sobre Easybits
            </h3>
            <p className="text-white/70 family-lato font-light ">Features</p>
            <p className="text-white/70 family-lato font-light">Planes</p>
            <p className="text-white/70 family-lato font-light">Blog</p>
            <p className="text-white/70 family-lato font-light">
              Preguntas frecuentes
            </p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-white mb-3 family-oswald uppercase">
              Síguenos
            </h3>
            <div className="flex gap-3">
              <FaFacebook className="text-white/70 family-lato font-light text-2xl md:text-lg" />
              <FaYoutube className="text-white/70 family-lato font-light text-2xl md:text-lg " />
              <RiTwitterXFill className="text-white/70 family-lato font-light text-2xl md:text-lg" />
              <AiFillInstagram className="text-white/70 family-lato font-light text-2xl md:text-lg" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
