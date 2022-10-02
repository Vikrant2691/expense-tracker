import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseList.css";

const NewExpense = (props) => {
  const [state, stateHandler] = useState(true);

  const submittedExpense = (submittedData) => {
    const expenseData = {
      ...submittedData,
      id: Math.random(),
    };
    return props.onSubmitExpense(expenseData);
  };

  const clickEventHandler = () => {
    if (state) {
      stateHandler(false);
    } else {
      stateHandler(true);
    }
  };

  const expenseButton = () => {
    if (state) {
      return (
        <div className="new-expense__control">
          <button onClick={clickEventHandler}> Click Here</button>
        </div>
      );
    } else {
      return <ExpenseForm onSubmitExpense={submittedExpense} atClick={clickEventHandler}/>;
    }
  };

  return <div className="new-expense">{expenseButton()}</div>;
};

export default NewExpense;
