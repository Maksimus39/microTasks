type Props = {
    title: string
}

export const Header = ({title}: Props) => {

    return (
        <div className={"Header"}>
            <h1 className={"Header_h1"}>--- {title} ---</h1>
        </div>
    );
};
