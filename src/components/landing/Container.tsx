import { cn } from "@/lib/utils";

interface Props{
    className?: string,
    children: React.ReactNode,
}
export default function Container({className, children}: Props) {
  return (
    <div className={cn("max-w-[1280px] mx-auto w-[90%]",className)}>
        {children}
    </div>
  )
}
