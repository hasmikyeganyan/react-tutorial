import ExpenseItemTitle from './ExpenseItemTitle';
function ExpenseItem(props){
return (
    <div>
<div className="card bg-dark text-light mb-2">
  <div className="card-body">
      <div className='row'>
          <ExpenseItemTitle title={props.title} date={props.date}  />
         
          <div className='col-6 align-middle text-end'> {props.price}
          <i class='fas fa-dollar-sign px-2'></i>
          </div>
</div>
  </div>
</div>
</div>
);


}

export default ExpenseItem;