import NewExpenseForm from "./newExpenseForm"

const NewExpense =(props)=>{
   

return(<div className='card bg-transparent border-secondary p-3 mb-3'>
        <NewExpenseForm setExpenses={props.setExpenses}/>
</div>
)
};

export default NewExpense;