import ExpenseItem from './ExpenseItem';
const Expenses =(props)=>{
    return(
        <div>
             <ExpenseItem 
              title={props.expenses[0].title}
               price ={props.expenses[0].price} 
               date={props.expenses[0].date} 
               status={props.expenses[0].status} 
               />
      <ExpenseItem
       title={props.expenses[1].title}
        price ={props.expenses[1].price}
         date={props.expenses[1].date}
          status={props.expenses[1].status}
          />
      <ExpenseItem 
      title={props.expenses[2].title}
       price ={props.expenses[2].price}
        date={props.expenses[2].date}
         status={props.expenses[2].status} 
         />
        </div>

    )
};
export default Expenses;