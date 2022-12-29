import React, { useState } from 'react';

export const Categories = () => {
    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
    ]
    let [activeIndex, setActiveIndex] = useState(0)
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((value, index)=> {
                    return (
                        <li key={index} onClick={()=>onClickCategory(index)} className={activeIndex === index ? "active" : ""}>{value}</li>
                    )
                })}
            </ul> 
        </div>
    )
}