import {Input} from "../../../input/Input.tsx";

type Props = {
    titleForFooter: string
}

export const Footer = ({titleForFooter}: Props) => {
    return (
        <div className={"Footer"}>
            <h2 className={"Footer_h2"}>{titleForFooter}</h2>
            <Input/>
        </div>
    );
};
