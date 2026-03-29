import { StarIcon } from "lucide-react";

export default function Comment({ 
  name, 
  username, 
  description, 
  rating = 4
}: {
  name: string,
  username: string,
  description: string,
  rating?: number
}) {
  return (
    <article className="bg-white text-black p-8 rounded-xl shadow-[0px_6px_0px_0_#000]">
      <p className="font-medium text-xl">{name}</p>
      <span className="text-sm text-black/50">@{username}</span>
      <p className="text-black/50 mt-4">{description}</p>
      
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`size-5 ${
              index < rating
                ? "text-yellow-400 fill-yellow-400" // Estrellas activas
                : "text-gray-200 fill-gray-200"     // Estrellas inactivas
            }`}
          />
        ))}
      </div>
    </article>
  );
}