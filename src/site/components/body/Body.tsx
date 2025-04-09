import {UseState} from "../../../useState/UseState.tsx";
import {FilterComponent} from "../../../filter/FilterComponent.tsx";

type Props = {
    titleForBody: string
}

export const Body = ({titleForBody}: Props) => {
    return (
        <div className={"Body"}>
            <h2 className={"Body_h2"}>{titleForBody}</h2>

            <div className={"Body_body"}>
                <UseState title={"UseStateHook"}/>
                <FilterComponent/>
            </div>
        </div>
    );
};

