"use client"

import { Category } from "@prisma/client"
import { 
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
    FcMusic
} from "react-icons/fc"

import { IconType } from "react-icons/lib"
import CategoryItem from "./Category-Item"

interface CategoriesProps {
    items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
    "Music": FcMusic,
    "Photography" : FcOldTimeCamera,
    "Fitness" : FcSportsMode,
    "Accounting" : FcSalesPerformance,
    "Computer Science" : FcMultipleDevices,
    "Filming" : FcFilmReel,
    "Engineering" : FcEngineering,
}

const Categories = ({ items } : CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-auto pb-2">
        {items.map((item) => (
            <CategoryItem 
                key={item.id}
                label={item.name}
                icon={iconMap[item.name]}
                value={item.id}
            />
        ))}
    </div>
  )
}

export default Categories