type Props = {
    titleForBody: string
}

export const Body = ({titleForBody}: Props) => {
    return (
        <div className={"Body"}>
            <h2 className={"Body_h2"}>{titleForBody}</h2>
        </div>
    );
};

