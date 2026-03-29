import { LucideIcon } from "lucide-react";
import Text from "./Text";

export default function Service({ title, description, index, Icon }: { index: number, title: string, description: string, Icon: LucideIcon }) {
  return (
    <article className="p-8 rounded-xl bg-[#2051D7]/80">
      <div className="flex items-center gap-4 justify-between relative">
        <p className="font-medium text-xl">{String(index).padStart(2, '0')}</p>
        <div className=" size-16 flex items-center justify-center rounded-full border border-white/20">
          <Icon />
        </div>
        <div className="w-6 h-[1px] absolute bg-white/80 bottom-0 left-0"></div>
      </div>
      <h3 className="font-medium text-2xl mb-4 mt-8">
        {title}
      </h3>
      <Text>
        {description}
      </Text>
    </article>
  );
}
