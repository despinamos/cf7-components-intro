import {useRef} from "react";


const UncontrolledInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
       alert(`Value: ${inputRef.current?.value}`);
    }

    return(
        <>
            <div className="text-center">
                <input
                    ref={inputRef}
                    type="text"
                    className="border rounded px-4 py-2"
                />
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-red text-white px-4 py-2">
                    Show Value
                </button>
            </div>
        </>
    )
};

export default UncontrolledInput ;