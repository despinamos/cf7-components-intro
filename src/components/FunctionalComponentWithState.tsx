import {useState} from "react";

const FunctionalComponentWithState = ()=> {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <button
                        className="bg-black text-white py-2 px-4"
                        onClick={increaseCount}
                    >
                        Increase
                    </button>
                    <button
                        className="bg-red-700 text-white py-2 px-4"
                        onClick={reset}
                    >
                        Reset
                    </button>
                    <button
                        className="bg-blue-600 disabled:bg-gray-600 text-white py-2 px-4"
                        onClick={decreaseCount}
                        disabled={count === 0}
                    >
                        Decrease
                    </button>
                </div>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;