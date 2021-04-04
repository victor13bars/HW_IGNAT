import React, {useState} from "react";
import Affairs from "./Affairs";
import css from "./Affairs.module.css"


// types
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "high") return affairs.filter(el => el.priority === "high");
    if (filter === "middle") return affairs.filter(el => el.priority === "middle");
    if (filter === "low") return affairs.filter(el => el.priority === "low");
    else return affairs;

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any

    return affairs.filter(el => el._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <hr/>
            <h1 className={css.home2}>homeworks 2</h1>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            

        </div>
    );
}

export default HW2;
