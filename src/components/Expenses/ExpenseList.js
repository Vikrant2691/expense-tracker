import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.lenght === 0)
    <p className="expenses-list__fallback"> No Content Found </p>;

  return props.items.map((element) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        ></ExpenseItem>
      </ul>
    );
  });
};

export default ExpenseList;
