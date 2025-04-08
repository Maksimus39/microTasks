import {useState} from "react";
import style from "./UseStatemodule.module.css"


type Props = {
    title: string;
}
export const UseState = (props: Props) => {
    const {title} = props
    const [number, setNumber] = useState<number>(0)
    const useStateHandler = () => {
        setNumber(number + 1)
    }


    return (
        <>
            <h2 className={style.titleHook}>{title}</h2>
            <button onClick={useStateHandler}
                    className={style.buttonStyle}
            >
                {number}
            </button>
        </>

    )
}