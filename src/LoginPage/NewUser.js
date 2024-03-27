import React from 'react'

const NewUser = () => {

  const[User, changeUser] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    pin:"",
    confirmPin:"",
    date:"",
    checked:false

  })

  function handleChange(event){
    const{name, value, checked,type} = event.target

    changeUser((prev)=>{
      return {
        ...prev,
            [name] : type==='checkbox' ? checked: value

      };

    })

  }

  function handleSubmit(event){
    event.preventDefault();

    if(User.pin !== User.confirmPin){
      console.log("The passwords do not match");


    }else{
      console.log("Submitted Information");
    }

  }

  console.log(User)


  return (
    <form className='newUser' onSubmit={handleSubmit}>
      
      <div className='form-group'>
        <label htmlFor='name'>First Name :</label>
        <input name='firstName' required onChange={handleChange}/>
      </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name :</label>
          <input name='lastName' required onChange={handleChange}/>
        </div>

       <div className='form-group'>
         <label htmlFor='date'>DOB :</label>
         <input type='date' name='date' onChange={handleChange}/>
       </div>

       <div className='email'>
        <label className='form-group' htmlFor='email'>Email :</label>
        <input type='email' required onChange={handleChange} name='email'/>

        <label htmlFor='newsletter'>Subscribe for monthly Newsletter</label>
        <input type='checkbox' name='newsletter'/>
       </div>

       <div>
        <h2>Enter New Pin</h2>
        <label>New Pin</label>
        <input type='password'required onChange={handleChange} name='pin'/>
       </div>

       <div className='form-group'>
        <label>Confirm Pin :</label>
        <input type='password' required onChange={handleChange} name='confirmPin'/>
       </div>

       <button className='form-button'>Create Account</button>


        
      
    </form>
    
  )
}

export default NewUser
