import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [year, setYear] = useState("");
  const elements = props.items;

  const yearValueHandler = (yearValue) => {
    setYear(yearValue);
  };

  const filteredList = elements.filter(
    (element) => element.date.getFullYear() === parseInt(year)
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={yearValueHandler} />
        <ExpenseList items={filteredList} />
      </Card>
    </li>
  );
};

export default Expense;
