const ExpenseStatus = (props) => (
  <div>
    <h6 className="text-decoration-underline text-secondary">
      {props.status}
      <i className="fas fa-hand-holding-usd px-1"></i>
    </h6>
  </div>
);
export default ExpenseStatus;
