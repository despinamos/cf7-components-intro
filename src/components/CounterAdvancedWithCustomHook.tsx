import CounterButton from "./CounterButton.tsx";
import { useAdvancedCounter } from "../hooks/useAdvancedCounter.ts";

const CounterAdvancedWithCustomHook = () => {

    //custom hook functions
    const { count, lastAction, time, increase, decrease, reset } = useAdvancedCounter();

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label={"Increase"}/>
                    <CounterButton onClick={reset} disabled={count===0} label={"Reset"} addClass="bg-blue-400"/>
                    <CounterButton onClick={decrease} disabled={count===0} label={"Decrease"} addClass="bg-cf-dark-red text-white"/>
                </div>
            </div>

            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
        </>
    )
}

export default CounterAdvancedWithCustomHook;