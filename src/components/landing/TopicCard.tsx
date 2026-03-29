import { LucideIcon } from 'lucide-react'
import Text from './Text'
import { Button } from '../ui/button'

export default function TopicCard({ title, description, Icon }: { title: string, description: string, Icon: LucideIcon }) {
    return (

        <article className="p-8 rounded-xl bg-[#2051D7] text-center">
            <div className="flex items-center justify-center rounded-full size-20 bg-[#4271E5] text-white mx-auto mb-6 border border-[#6B8DDD]">
                <Icon className="size-8" />
            </div>
            <h3 className="font-medium text-2xl mb-2">{title}</h3>
            <Text>
                {description}
            </Text>
            <Button className="mt-6 w-full">Ver más</Button>
        </article>
    )
}
