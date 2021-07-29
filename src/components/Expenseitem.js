import ExpenseItemTitle from './ExpenseItemTitle';
function ExpenseItem(){
return (
    <div>
<div className="card bg-dark text-light mb-2">
  <div className="card-body">
      <div className='row'>
          <ExpenseItemTitle />
         
          <div className='col-6 align-middle text-end'> 120$</div>
</div>
  </div>
</div>
</div>
);


}
export default ExpenseItem;