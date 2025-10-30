import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Calculator.css";
function Calculator() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const number = (e) => setValue(value + e.target.value);
  const deleteAll = () => setValue("");
  const deleteLast = () => setValue(value.toString().slice(0, -1));
  const clearHistory = () => setHistory([]);
  const showHicon = () => setShowHistory(!showHistory);
  const calculate = () => {
    let eValue = eval(value);
    setHistory([...history, `${value} = ${eValue}`]);
    setValue(eval(value));

    console.log(history);
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <p className="history-icon" onClick={showHicon}>
            H
          </p>
          <div className="display">
            <input type="text" id="result" disabled value={value} />
          </div>
          <div className="buttons">
            <button value={"AC"} onClick={deleteAll} className="white">
              AC
            </button>
            <button value={"C"} onClick={deleteLast} className="white">
              C
            </button>
            <button value={"%"} onClick={number} className="white">
              %
            </button>
            <button value={"/"} onClick={number} className="yellow">
              ÷
            </button>

            <button value={"7"} onClick={number}>
              7
            </button>
            <button value={"8"} onClick={number}>
              8
            </button>
            <button value={"9"} onClick={number}>
              9
            </button>
            <button value={"*"} onClick={number} className="yellow multiply">
              ×
            </button>

            <button value={"4"} onClick={number}>
              4
            </button>
            <button value={"5"} onClick={number}>
              {" "}
              5
            </button>
            <button value={"6"} onClick={number}>
              6
            </button>
            <button value={"-"} onClick={number} className="yellow">
              −
            </button>

            <button value={"1"} onClick={number}>
              1
            </button>
            <button value={"2"} onClick={number}>
              2
            </button>
            <button value={"3"} onClick={number}>
              3
            </button>
            <button value={"+"} onClick={number} className="yellow">
              +
            </button>

            <button value={"0"} onClick={number} className="white">
              0
            </button>
            <button value={"."} onClick={number}>
              .
            </button>
            <button value={"="} onClick={calculate} className="equal yellow">
              =
            </button>
          </div>
        </div>
        {showHistory ? (
          <div className="history-container">
            <h3>History</h3>

            <div className="history-list">
              {history.map((m, i) => {
                return <p key={i}>{m}</p>;
              })}
            </div>
            <button className="clear-history" onClick={clearHistory}>
              Clear History
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Calculator;
