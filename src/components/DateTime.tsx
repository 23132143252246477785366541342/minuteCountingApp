import { useState, useEffect } from "react";
import { sessionStore } from "../store";

export const DateTime = () => {
    const [date, setDate] = useState(new Date());
    const storeDate = sessionStore.use.lastAuth();
    useEffect(() => {
        const timer = setInterval(() => {
            const difference = date.getTime() - new Date(storeDate).getTime();
            const day = 86400000;
            const week = 604800000;
            
            if (difference > day) {
                sessionStore.set.day(0);
                sessionStore.set.lastAuth(new Date(date.toLocaleDateString()));
            }
            if (difference > week) {
                sessionStore.set.week(0);
                sessionStore.set.lastAuth(new Date(date.toLocaleDateString()));
            }
            
            setDate(new Date());
        }, 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <div>
            <code>
                {date.toLocaleTimeString()}
            </code>
        </div>
    )
}