const Filter =()=>{
    const currentYear=new Date().getFullYear();
 return(  
      <div className='card bg-transparent border-secondary  mb-3 p-3'>
<div className='input-group'>
  <div className='input-group-prepend'>
    <label className='input-group-text bg-secondary text-light border-0' for='groupSelect'>
      Filter by year
    </label>
  </div>
  <select className='custom-select form-control bg-dark border-0 text-light'
  id ='groupSelect'>
<option selected>{currentYear}</option>
<option value={currentYear-1}>{currentYear-1}</option>
<option value={currentYear-2}>{currentYear-2}</option>
<option value={currentYear-3}>{currentYear-3}</option>

  </select>
</div>
</div>
 );
};
export default Filter;