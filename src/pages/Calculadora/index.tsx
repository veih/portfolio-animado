import React, { useState, useEffect } from "react";

export const Calculadora = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState("");

    const calculete = () => {
        switch (operacion) {
            case "+":
                setNum(parseFloat(num2) + parseFloat(num));
                break;
            case "-":
                setNum(parseFloat(num2) - parseFloat(num));
                break;
            case "*":
                setNum(parseFloat(num2) * parseFloat(num));
                break;
            case "/":
                setNum(parseFloat(num2) / parseFloat(num));
                break;
            default:
                break;
        }
    }

    const handleClear = () => {
        setNum(0);
        setNum2(0);
        setOperacion("");
    }

    const handleChange = (e) => {
        var opt = (e.target.value);
        setNum(0);
        setNum2(num);
        setOperacion(opt);
    }

    {/* Numaros e operadores da calculadora */ }
    const handleNum = (e) => {
        const nums = e.target.value;
        if (num === 0) {
            setNum(nums);
        } else {
            setNum(num + nums);
        }
    }

    {/*fim dos numeros e Operadores da calculadora */ }

    return (
        <div className="bodyr">
            <div className="containers">
                <form className="calculator" name="calc">
                    <input
                        value={num}
                        type="text"
                        readOnly
                        className="value"
                    />
                    <option className="num clear option" onClick={handleClear} value={'c'}>c</option>
                    <option className="num option" onClick={handleChange} value={'/'}>/</option>
                    <option className="num option" onClick={handleChange} value={'*'}>*</option>

                    <option className="num option" onClick={handleNum} value={7}>7</option>
                    <option className="num option" onClick={handleNum} value={8}>8</option>
                    <option className="num option" onClick={handleNum} value={9}>9</option>
                    <option className="num option" onClick={handleChange} value={'-'}>-</option>

                    <option className="num option" onClick={handleNum} value={4}>4</option>
                    <option className="num option" onClick={handleNum} value={5}>5</option>
                    <option className="num option" onClick={handleNum} value={6}>6</option>
                    <option className="num plus option" onClick={handleChange} value={'+'}>+</option>

                    <option className="num option" onClick={handleNum} value={1}>1</option>
                    <option className="num option" onClick={handleNum} value={2}>2</option>
                    <option className="num option" onClick={handleNum} value={3}>3</option>
                    <option className="num option" onClick={handleNum} value={0}>0</option>

                    <option className="num option" onClick={handleNum} value={'00'}>00</option>
                    <option className="num option" onClick={handleNum} value={'.'}>.</option>
                    <option className="num equal option" onClick={calculete} value={'='}>=</option>
                </form>
            </div>
        </div>
    );
}
