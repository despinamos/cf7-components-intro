type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const CounterButton = ({onClick, disabled, label, addClass = "bg-black text-white"} : ButtonProps) => {
    return (
        <>
            <button
                className={"disabled:bg-cf-dark-grey py-2 px-4 " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default CounterButton ;