import ExpensePrice from './ExpensePrice';
import ExpenseTitle from './ExpenseTitle';
import ExpenseStatus from './ExpenseStatus';
import Card from '../shared/Card';
const ExpenseItem=(props)=>(
<Card>
      <div className='row'>
          <ExpenseTitle title={props.title} date={props.date}  />
         
          <div className='col-6  align-middle text-end'> 
          <div className='row'>
           <div className='col-6 '>
            <ExpensePrice price={props.price} />
          </div>
            <div className='col-6'>
              <ExpenseStatus status={props.status}/>
            </div>
          </div>
         </div>
</div>
</Card>
  




);

export default ExpenseItem;