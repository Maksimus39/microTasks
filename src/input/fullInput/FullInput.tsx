import {ChangeEvent, useState} from "react";

type InitialState = string
type Props = {
    addInputState: (title: string) => void
}

export const FullInput = (props: Props) => {
    const [title, setTitle] = useState<InitialState>("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const buttonClickHandler = (title: string) => {
        props.addInputState(title)
        setTitle("")
    }


    return (
        <div>
            <input type="text"
                   placeholder={"input"}
                   onChange={onChangeHandler}
                   value={title}
            />

            <button onClick={() => buttonClickHandler(title)}>learn input</button>
        </div>
    );
};

