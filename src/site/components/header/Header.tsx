import {Button} from "../../../button/Button.tsx";

type Props = {
    title: string
}

export const Header = (props: Props) => {
    const {title} = props;

    return (
        <div className={"Header"}>
            <h1 className={"Header_h1"}>--- {title} ---</h1>
            <Button/>
        </div>
    );
};
