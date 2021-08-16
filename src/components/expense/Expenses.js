import EmptyExpenses from './EmptyExpenses';
import ExpenseItem from './ExpenseItem';
const Expenses =(props)=>(
  
        <div>

            {props.expenses.length > 0 ?(
                props.expenses.map((expense)=> (
                  <ExpenseItem 
                  key={expense.title}
                  title={expense.title}
                   price ={expense.price} 
                   date={expense.date} 
                   status={expense.status} 
                   />
            ))
            ): (
             <EmptyExpenses />
            ) }
             
</div>
    );
            

export default Expenses;