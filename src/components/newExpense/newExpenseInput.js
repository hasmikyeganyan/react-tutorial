const NewExpenseInput = (props) => {
  return (
    <input
      type={props.type}
      className="form-control bg-dark text-light border-0"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
export default NewExpenseInput;
