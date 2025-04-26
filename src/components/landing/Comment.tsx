import { StarIcon } from "lucide-react";

export default function Comment() {
  return (
    <article className="bg-white text-black p-8 rounded-xl shadow-[0px_6px_0px_0_#000]">
      <p className="font-medium text-xl">Carlos Medina</p>
      <span className="text-sm text-black/50">@Carlos</span>
      <p className="text-black/50 mt-4">
        The Image Background Remover is a game-changer! The AI accuracy is
        impressive, and it saves me from expensive photo editing software.
      </p>
      <div className="flex items-center gap-1 mt-4 ">
        {[1, 2, 3, 4].map((item) => (
          <StarIcon
            key={item}
            className="size-5 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>
    </article>
  );
}
