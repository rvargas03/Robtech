import { cn } from "@/lib/utils";

interface Props{
    className?: string,
    children: React.ReactNode,
    variant?: 'subtitle' | 'text',
}

export default function Text({className = '', children, variant = 'text'}: Props) {

    if(variant === 'subtitle'){
        return (
            <h2 className={cn("text-3xl md:text-4xl font-medium text-white",className)}>
                {children}
            </h2>
        )
    }

  return (
    <p className={cn("text-base text-white/80",className)}>
        {children}
    </p>
  )
}
