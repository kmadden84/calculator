import React, { useState } from "react";
import "./index.css";
import { CalculatorScreen } from "./screens/CalculatorScreen";
import { HistoryScreen } from "./screens/HistoryScreen";
import { Evaluator } from "cloud-evaluate";
import { Routes, Route, NavLink } from "react-router-dom"

const App: React.FC = () => {
  const activeCssClass = ({ isActive }: { isActive: boolean }) => isActive ? 'active' : undefined;

  const [inProgressNumber, setInProgressNumber] = useState<string>('');
  const [result, setResult] = useState<string | null | undefined>(null);
  const [history, setHistory] = useState<String[]>([]);
  const evaluator = new Evaluator();

  const clear = () => {
    setInProgressNumber("0")
    setResult(null)
  }

  const calculate = () => {
    evaluator.calculate(inProgressNumber).then((res) => {
      setResult(res?.toString())
      setHistory(history.concat(`${inProgressNumber}=${res}`))
      console.log(history)
    })

    clear()
  };

  const handleSetFunctionality = (e: React.MouseEvent) => {
    if (inProgressNumber === "0") {
      setInProgressNumber("")
    }
    if ((e.target as HTMLButtonElement).value === "C") {
      clear();
      return;
    }
    if ((e.target as HTMLButtonElement).value === "=") {
      calculate()
      return;
    }
    setInProgressNumber(prev => prev && prev !== '0' ? prev + (e.target as HTMLButtonElement).value : (e.target as HTMLButtonElement).value)
  }

  return (
    <div className="App" data-testid="app">
      <ul>
        <li><NavLink className={activeCssClass} to="/">Calculator</NavLink></li>
        <li><NavLink className={activeCssClass} to="history">History</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<CalculatorScreen
          inProgressNumber={inProgressNumber}
          result={result}
          handleSetFunctionality={handleSetFunctionality}
        />} />
        <Route path="history" element={<HistoryScreen history={history} />} />
      </Routes>
    </div>
  )
}


export default App;
