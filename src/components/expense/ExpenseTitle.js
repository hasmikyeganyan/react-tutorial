const ExpenseTitle=(props)=>(

    <div className='col-6 '>
              <div className='row'>
            <div className='col-4 text-secondary'>
            <i class='far fa-clock px-2' ></i>{' '}
            {props.date.toDateString()}
            </div>
            <div className='col-8'>
            <b>{props.title} </b>
               </div>
               </div>
               </div>

);
export default ExpenseTitle;