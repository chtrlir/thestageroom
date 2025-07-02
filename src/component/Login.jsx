import React from 'react'

const Login = () => {
  return (
    <div className='login'>
    
      <div className="login-wrapper">
      
          <h1>Login</h1>
        <div className="input-wrapper">
          <label htmlFor="">Username &nbsp;</label>
          <input type="text" />
        </div>
         <div className="passwprd-wrapper">
          <label htmlFor="">Password &nbsp;</label>
          <input type="password" />
        </div>
        <button>Submit</button>
      </div>
     
    </div>
  )
}

export default Login
