import {useEffect, useState} from "react";

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine); //returns if a device is online through browser

    useEffect(() => {
        const handler = () => setIsOnline(navigator.onLine); //sets the new state (true or false)
        const pollingId: number = setInterval(handler, 5000);

        window.addEventListener('online', handler);
        window.addEventListener('offline', handler);

        return () => {
            clearInterval(pollingId);
            window.removeEventListener('online', handler);
            window.removeEventListener('offline', handler);
        };
    }, []);

    return (
        <>
            {/*.bg-green-500.text-white*/}
            <div className={`text-white text-center mt-12 mx-4 p-4 rounded ${ isOnline ? "bg-green-500" : "bg-red-500" }`}>
                {isOnline ? "You are online :)" : "You are offline :("}
            </div>
        </>
    )
}

export default OnlineStatus;