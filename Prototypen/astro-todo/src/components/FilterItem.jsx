import { memo, useEffect, useState } from "react";

export function FilterItem({ category, filteredCategory, toggleFilterCategory }) {
    console.log('Render FilterItem')

    const isFilterActive = () => {
        return filteredCategory === category.name
    }

    return (
        <>
            <p className={`filter-item${isFilterActive() ? ' active-filter' : ''}`} onClick={() => toggleFilterCategory(category.name)}>
                {category.name} ({category.count})
            </p>
        </>
    )
}
export default memo(FilterItem)