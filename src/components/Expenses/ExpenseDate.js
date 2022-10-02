import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
