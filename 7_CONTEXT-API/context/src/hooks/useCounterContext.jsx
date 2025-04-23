import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const userCounterContext = () => {

    const context = useContext(CounterContext)

    return context
}