import { Gamepad } from "lucide-react";
import Text from "./Text";

export default function Service() {
  return (
    <article className="p-8 rounded-xl bg-[#2051D7]/80">
      <div className="flex items-center gap-4 justify-between relative">
        <p className="font-medium text-xl">01</p>
        <div className=" size-16 flex items-center justify-center rounded-full border border-white/20">
          <Gamepad />
        </div>
        <div className="w-6 h-[1px] absolute bg-white/80 bottom-0 left-0"></div>
      </div>
      <h3 className="font-medium text-2xl mb-4 mt-8">
        Juegos Educativos Interactivos
      </h3>
      <Text>
        Descubre una colección de juegos diseñados para desarrollar habilidades
        en matemáticas, ciencia, lenguaje y más, adaptados para todas las
        edades.
      </Text>
    </article>
  );
}
