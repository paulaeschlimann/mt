import { memo } from "react";
import { useStore } from "@nanostores/react";
import { todoStore, filteredCategory } from '../todoStore'
import FilterItem from "./FilterItem";

export function Filter() {
    console.log('Render Filter')

    const todos = useStore(todoStore)
    const $filteredCategory = useStore(filteredCategory)

    const categoryCount = countBy(todos, 'category')
    const categoryCountByName = categoryCount.sort((a, b) => {
        const aNameLower = a.name.toLowerCase()
        const bNameLower = b.name.toLowerCase()
        if (aNameLower < bNameLower)
          return -1
        if (aNameLower > bNameLower)
          return 1
        return 0
    })

    function countBy(items, name) {        
        var counts = []

        for (const item of items) {
            var countByName = item[name]
            if (countByName !== undefined && countByName !== '' && !counts.some(e => e.name === countByName)) {
                counts.push({ name: countByName, count: 0})
            }
            
            const index = counts.findIndex(e => e.name === countByName)
            
            if (index !== -1) {
                counts[index].count++
            }
        }

        return counts
    }

    function toggleFilterCategory(categoryName) {
        if ($filteredCategory === categoryName) {
            filteredCategory.set('')
        } else {
            filteredCategory.set(categoryName)
        }
    }

    return (
        <>
            <ul className="no-list-style">
                {categoryCountByName.map(category => (
                    <li key={category.name}>
                        <FilterItem category={category} filteredCategory={$filteredCategory}
                            toggleFilterCategory={toggleFilterCategory} />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default memo(Filter)