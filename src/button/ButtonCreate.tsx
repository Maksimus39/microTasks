type Props = {
    className: string
    buttonName: string
    onClick: () => void
}

export const ButtonCreate = (props: Props) => {
    const {className, buttonName, onClick} = props;

    return (
        <button className={className} onClick={onClick}>
            {buttonName}
        </button>
    );
};

