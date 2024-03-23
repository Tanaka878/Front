import React from 'react'

const NewUser = () => {
  return (
    <form className='newUser'>
      
      <div className='form-group'>
        <label htmlFor='name'>First Name :</label>
        <input name='firstName' required/>
      </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name :</label>
          <input name='lastName' required/>
        </div>

       <div className='form-group'>
         <label htmlFor='date'>DOB :</label>
         <input type='date' name='date'/>
       </div>

       <div>
        <label className='form-group' htmlFor='email'>Email :</label>
        <input type='email' required/>

        <label htmlFor='newsletter'>Subscribe for monthly Newsletter</label>
       </div>

        
      
    </form>
    
  )
}

export default NewUser
