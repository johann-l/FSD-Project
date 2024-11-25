import '../css-files/calc.css'; //css
import useCalcFunc from './calcfunc.js'; //js
import { Link } from "react-router-dom"; //routing
import React from 'react';

export default function Calc() {
    const { display, clear, calculate, result } = useCalcFunc();

    return (
        <div style={{padding:'20px 0 0 20px'}}>
            <Link to="/">Go Back</Link><br />
            <h1 style={{textAlign: 'center'}}>Calculator app</h1>
            <div style={{padding: '100px', margin:'auto'}}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <input type="text" value={result} disabled />
                            </td>
                            <td>
                                <input type="button" value="C" onClick={clear} />
                            </td>
                            </tr>
                        <tr>
                            <td>
                                <input type="button" value="1" onClick={() => display("1")} />
                            </td>
                            <td>
                                <input type="button" value="2" onClick={() => display("2")} />
                            </td>
                            <td>
                                <input type="button" value="3" onClick={() => display("3")} />
                            </td>
                            <td>
                                <input type="button" value="/" onClick={() => display("/")} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" value="4" onClick={() => display("4")} />
                            </td>
                            <td>
                                <input type="button" value="5" onClick={() => display("5")} />
                            </td>
                            <td>
                                <input type="button" value="6" onClick={() => display("6")} />
                            </td>
                            <td>
                                <input type="button" value="*" onClick={() => display("*")} />
                            </td>
                            </tr>
                        <tr>
                            <td>
                                <input type="button" value="7" onClick={() => display("7")} />
                            </td>
                            <td>
                                <input type="button" value="8" onClick={() => display("8")} />
                            </td>
                            <td>
                                <input type="button" value="9" onClick={() => display("9")} />
                            </td>
                            <td>
                                <input type="button" value="-" onClick={() => display("-")} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" value="0" onClick={() => display("0")} />
                            </td>
                            <td>
                                <input type="button" value="." onClick={() => display(".")} />
                            </td>
                            <td>
                                <input type="button" value="=" onClick={calculate} />
                            </td>
                            <td>
                                <input type="button" value="+" onClick={() => display("+")} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}