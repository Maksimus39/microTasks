import {useState} from "react";
import style from "./Input.module.css"
import {FullInput} from "./fullInput/FullInput.tsx";

export const Input = () => {
    const [message, setMessage] = useState([
            {message: ""}
        ]
    )

    const addInputState = (title: string) => {
        const newMessage = {message: title}
        setMessage([...message, newMessage])
    }

    return (
        <div className={style.inputStyle}>
            <FullInput addInputState={addInputState}/>


            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>

    );
};

