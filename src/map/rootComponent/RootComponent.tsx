import {NewComponents, StudentType} from "../newComponents/NewComponents.tsx";
import s from "./RootComponent.module.css"

export const RootComponent = () => {
    const students: StudentType[] = [
        { id: 1, name: "Alice", age: 20 },
        { id: 2, name: "Bob", age: 22 },
        { id: 3, name: "Charlie", age: 21 },
        { id: 4, name: "David", age: 23 },
        { id: 5, name: "Eve", age: 20 },
        { id: 6, name: "Frank", age: 22 },
        { id: 7, name: "Grace", age: 24 },
        { id: 8, name: "Heidi", age: 21 },
        { id: 9, name: "Ivan", age: 23 },
        { id: 10, name: "Judy", age: 20 },
    ];


    return (
        <div className={s.NewComponents}>
            <NewComponents students={students}/>
        </div>
    );
};
