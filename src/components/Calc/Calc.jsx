import NumBtn from "../NumBtn/NumBtn";
import styles from "./Calc.module.css";
import { useState } from "react";
import Result from "../Result/Result";

export default () => {
  let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const [num, setNum] = useState("0");
  const [temp, setTemp] = useState("0");
  const [userChoise, setChoise] = useState("");
  const [isPercent, setPerscent] = useState(false);
  const [isPolar, setPolar] = useState(true);
  const getTemp = (choise) => {
    setTemp(num);
    setChoise(choise);
    setNum("0");
  };
  const swithPolar = () => {
    setPolar(!isPolar);
    setNum(isPolar ? num.replace("-", "") : "-" + num);
  };
  const calculate = () => {
    let firstNum = Number(temp);
    let secondNum = Number(num);
    const getPersent = () => (secondNum / 100) * firstNum;
    switch (userChoise) {
      case "sum":
        setNum(firstNum + (isPercent ? getPersent() : secondNum));
        setPerscent(false);
        break;
      case "sub":
        setNum(firstNum - (isPercent ? getPersent() : secondNum));
        setPerscent(false);
        break;
      case "mult":
        setNum(firstNum * (isPercent ? getPersent() : secondNum));
        setPerscent(false);
        break;
      case "divide":
        setNum(firstNum / (isPercent ? getPersent() : secondNum));
        setPerscent(false);
        break;
    }
    setTemp("0");
  };
  const numInput = (number) => {
    if (number === "." && num === "0") {
      setNum("0" + `${number}`);
      return;
    }
    if (num[0] === "0" && num[1] !== ".") {
      setNum(number);
      return;
    }
    setNum((prev) => prev + `${number}`);
  };

  return (
    <div className={styles.calcBody}>
      <Result>{num}</Result>
      <div className={styles.buttons}>
        <div className={styles.lineFuncBtns}>
          <NumBtn
            symbol={"AC"}
            fun={() => {
              setNum("0");
            }}
          />
          <NumBtn symbol={"-/+"} fun={swithPolar} />
          <NumBtn symbol={"%"} fun={() => setPerscent(true)} />
          <NumBtn symbol={"+"} fun={() => getTemp("sum")} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.NumButtons}>
            {numbers.map((number) => (
              <NumBtn
                symbol={number}
                key={number}
                fun={() => numInput(number)}
              />
            ))}
          </div>
          <div className={styles.funcBtns}>
            <NumBtn symbol={"-"} fun={() => getTemp("sub")} />
            <NumBtn symbol={"×"} fun={() => getTemp("mult")} />
            <NumBtn symbol={"÷"} fun={() => getTemp("divide")} />
            <NumBtn symbol={"="} fun={calculate} />
          </div>
        </div>
      </div>
    </div>
  );
};
