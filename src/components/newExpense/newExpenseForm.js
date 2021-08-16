import NewExpenseInput from "./newExpenseInput";
import { useState } from "react";
import moment from "moment";
const NewExpenseForm =(props)=>{
    const[title,setTitle]=useState('');
    const[date,setDate]=useState(new Date());
    const[price,setPrice]=useState(0);
    const[status,setStatus]=useState('Good');


            const changeTitle=(event) =>setTitle(event.target.value);
            const changeDate =(event)=>setDate(event.target.value);
            const changePrice =(event)=>setPrice(event.target.value);
            const changeStatus =(event)=>setStatus(event.target.value);

            const onSubmit=(event)=> {
                event.preventDefault();
                const newExpense={
                    title:title,
                    date:date,
                    price:price,
                    status:status,


                };
                props.setExpenses(newExpense);
                setTitle('' );
                setPrice(0);
                setDate(new Date());
                setStatus('Good');
                
            };

        return(   
    <form onSubmit={onSubmit}>
        <div className="row">
            <div className='col-3 '>
                <NewExpenseInput type='text'
                 placeholder='Enter Title' 
                onChange={changeTitle}
                value={title}
                />
              
            </div>
            <div className='col-3'>
            <NewExpenseInput type='date' 
            placeholder='Enter Date' 
            onChange={changeDate}
            value={moment(date).format('YYYY-MM-DD')
            }
            />
            </div>
            <div className='col-2'>
            <NewExpenseInput type='text'
             placeholder='Enter Status'
             onChange={changeStatus}
             value={status}
             />
           =
            </div>
            <div className='col-2'>
            <NewExpenseInput type='number' 
            placeholder='Enter Number' 
            onChange={changePrice}
            value={price}
            />
            </div>
            <div className='col-2'>
                <button type='submit'className='btn  btn-dark' >Submit</button>
            </div>
            
        </div>
    </form>
        );
};

export default NewExpenseForm;