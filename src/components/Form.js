import './Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const [username,setUsername]=useState('Email');
    const [password,setPassword]=useState('Password');
    const navigate=useNavigate();

    const usernameHandler=(event)=>
    {
        setUsername(event.target.value)
    }
    
    const passwordHandler=(event)=>
    {
        setPassword(event.target.value)
    }

    const formHandler=(event)=>
    {
        event.preventDefault();
        localStorage.setItem("Username",username);
        localStorage.setItem("Password",password);
        navigate('/home');
    }
    return (
        <div className='layout'>
            <form className="Loginform" onSubmit={formHandler}>
                <h1>Welcome to Enovate</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' value={username} onChange={usernameHandler}autoComplete="off"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password'  value={password} onChange={passwordHandler}autoComplete="off"></input>
               <button className="Loginbutton">Log in</button>
                <p className='pi'style={{ fontWeight: 400 }}>Please Log in to continue</p>
            </form>
        </div>
    )
}
export default Form;