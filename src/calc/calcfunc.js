import React, { useState } from 'react';

export default function useCalcFunc() {
    const [result, setResult] = useState("");

    const display = (p) => {
        setResult(result + p);
    };

    const clear = () => {
        setResult("");
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (e) {
            setResult("Error");
        }
    };

    return { display, clear, calculate, result };
}
