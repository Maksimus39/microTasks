import styles from './Button.module.css';
import {ButtonCreate} from "./ButtonCreate.tsx";

export const Button = () => {

    const buttonHandlerOne = () => {
        console.log("Max", 42)
    }

    const buttonHandlerTwo = () => {
        console.log("Larisa", 38)
    }

    return (
        <div>
            <ButtonCreate className={styles.Button}
                          buttonName={"Button-1"}
                          onClick={buttonHandlerOne}
            />
            <ButtonCreate className={styles.Button}
                          buttonName={"Button-2"}
                          onClick={buttonHandlerTwo}
            />
        </div>
    );
};

