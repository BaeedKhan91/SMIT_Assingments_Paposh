import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  let slicedValue = "";
  let operators = ["+", "*", "-", "/", "%"];

  // let zero  = ["0"]

  // let expression = "2 + 2";

  // console.log(expression.match);

  const number = (e) => {
    const lastCharacter = value.slice(-1);
    const newValue = e.target.value;
    if (lastCharacter === "0" && newValue === "0") return;
    if (
      newValue === "." &&
      value
        .split(/[\+\-\*\/%]/)
        .pop()
        .includes(".")
    )
      return;
    if (
      (value === "" && operators.includes(newValue)) ||
      (value === "" && newValue === ".")
    ) {
      setValue("0" + newValue);
      return;
    }
    if (operators.includes(lastCharacter) && operators.includes(newValue))
      return;
    setValue(value + newValue);
  };
  const deleteAll = () => setValue("");
  const deleteLast = () => setValue(value.toString().slice(0, -1));
  const clearHistory = () => setHistory([]);
  const showHicon = () => setShowHistory(!showHistory);
  const calculate = () => {
    if (value === "") return;

    const numbers = value.split(/[\+\-\*\/%]/).map(Number);
    const opr = value.split("").filter((f) => operators.includes(f));

    let result = numbers[0];

    for (let i = 0; i < opr.length; i++) {
      const nextNum = numbers[i + 1];
      const op = opr[i];
      switch (op) {
        case "+":
          result += nextNum;
          break;
        case "-":
          result -= nextNum;
          break;
        case "*":
          result *= nextNum;
          break;
        case "%":
          result = result % nextNum;
          break;
        case "/":
          result =
            nextNum === 0
              ? setValue("Cannot Divided By zero")
              : result / nextNum;
          break;

        default:
          break;
      }
    }

    if (result) {
      setValue(result.toString());
    }

    console.log(opr);

    console.log(numbers);

    //     if (value === "") return;

    //     const lastChar = value.slice(-1);
    //     if (operators.includes(lastChar)) return;

    //     // 🧮 Split expression into numbers and operators
    //     const numbers = value.split(/[\+\-\*\/%]/).map(Number);
    //     const ops = value.split("").filter((ch) => operators.includes(ch));

    //     if (numbers.length - 1 !== ops.length) return; // invalid expression
    // // 224
    // // +
    //     let result = numbers[0];

    //     for (let i = 0; i < ops.length; i++) {
    //       const nextNum = numbers[i + 1];
    //       const op = ops[i];

    //       switch (op) {
    //         case "+":
    //           result += nextNum;
    //           break;
    //         case "-":
    //           result -= nextNum;
    //           break;
    //         case "*":
    //           result *= nextNum;
    //           break;
    //         case "/":
    //           result = nextNum === 0 ? setValue("Cannot Divided By Zero") : result / nextNum;
    //           break;
    //         case "%":
    //           result = result % nextNum;
    //           break;
    //         default:
    //           break;
    //       }
    //     }

    //     if ((result)) {
    //       setHistory([...history, `${value} = ${result}`]);
    //       setValue(result.toString());
    //     }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <p className="history-icon" onClick={showHicon}>
            <FontAwesomeIcon icon={faHistory} size="1x" />
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

            <button value={"0"} onClick={number}>
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
