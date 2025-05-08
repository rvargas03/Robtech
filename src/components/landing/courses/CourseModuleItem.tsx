import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props{
    checked: boolean,
    text:string
}

export default function CourseModuleItem({checked, text}: Props) {


    return (
    <div className="flex items-center gap-2">
    <button className={cn("size-5 border border-white  rounded-full grid place-content-center",{
        "bg-white": checked,
    })}>
        { checked && <Check width={12} className="stroke-black" /> }
                   
    </button>
    <p className="text-white text-sm">{text}</p>
  </div>
  )
}
