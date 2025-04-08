import style from "./../rootComponent/RootComponent.module.css"

export type StudentType = {
    id: number
    name: string
    age: number
}

type Props = {
    students: StudentType[]
}

export const NewComponents = (props: Props) => {

    return (
        <div>
            <ul className={style.List}>
                {props.students.map((s) => {
                    return (
                        <li key={s.id}>
                            <span className={style.Black}>{s.name}: </span>
                            <span className={style.Red}>{s.age}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
