import Wrapper from "./Components/Wrapper";
import Button from "./Components/Button";
import ButtonBox from "./Components/Buttonbox";
import Screen from "./Components/Screen";
import React, { useState } from "react";

//Calculator button setup in an array
const btnValues = [
  ["AC", "del", "^", "+-"],
  ["nPr","nCr", "n!", "÷"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "="],
];

const App = () => {
  //calculator value
  const [value, setValue] = useState("")

  //puts the previous value to another value to input the next value
  const[preval, setpreval] = useState("")

  //operation used for calculation
  const [operation, setOperation] = useState("")


  //factorial function
  const factorial = (val) => {
    var result = val
    if (val === "0" || val === "1") {
      result = 1;
    }
    while (val > 1) {
      val--;
      result *= val;
    }
    
    return result;
  }

  //adds number
  const numClickHandler = (val) => {
    setValue(value+String(val));
  }

  //adds a decimal point
  const dotclickHandler = () => {
    setValue(value+".");
  }

  //adds the operation
  const operationClickHandler = (operation) => {
    setOperation(operation);
    setpreval(value);
    setValue("");
  }
  
  //Does the operations
  const equalClickHandler = () => {
    if (operation === "+"){
      setValue(parseFloat(preval) + parseFloat(value));
      setOperation("");
    } else if (operation === "-"){
      setValue(parseFloat(preval) - parseFloat(value));
      setOperation("");
    } else if (operation === "X"){
      setValue(parseFloat(preval) * parseFloat(value));
      setOperation("");
    } else if (operation === "÷"){
      setValue(parseFloat(preval) / parseFloat(value));
      setOperation("");
    } else if (operation === "^") {
      setValue(parseFloat(preval) ** parseFloat(value));
      setOperation("");
    } else if (operation === "nPr") {
      setValue(factorial(preval)/factorial(preval-value));
      setOperation("");
    } else if (operation === "nCr") {
      setValue(factorial(preval)/(factorial(preval-value)*factorial(value)));
      setOperation("");
    }
  }

  //inverts value
  const invertClickHandler = () => {
    setValue(-1*parseFloat(value));
  }

  //resets value
  const resetClickHandler = () => {
    setValue("");
    setOperation("");
  }

  //deletes last inputted value
  const delClickHandler = () => {
    const split = value.split("")
    split.pop();
    const returntext = split.join("");
    setValue(returntext)
  }

  //finds the factorial of the number
  const factorialclickHandler = () => {
    setValue(factorial(value));
  }


  return (
    <div>
      <Wrapper>
        <Screen value={value}/>
        <ButtonBox>
          { btnValues.flat().map((btn, i) => {
            //^ sets the calculator button layout in the screen
            return (
              <Button 
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={ () =>{
                  //each button is set to a following function
                  if (btn === "AC"){
                    resetClickHandler();
                  } else if (btn === "del") {
                    delClickHandler();
                  } else if (btn === "+-") {
                    invertClickHandler();
                  } else if (btn === "=") {
                    equalClickHandler();
                  } else if ((btn === "+")|| (btn === "-")|| (btn === "÷")|| (btn === "X")|| (btn === "nPr")|| (btn === "nCr")|| (btn === "^")){
                    operationClickHandler(btn);
                  } else if (btn === "."){
                    dotclickHandler();
                  } else if (btn === "n!") {
                    factorialclickHandler();
                  } else {
                    numClickHandler(btn);
                  }
                }}
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
  
}

export default App;
