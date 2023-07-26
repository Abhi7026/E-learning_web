import { useNavigate } from 'react-router-dom';
import './LogoutButton.css';
const LogoutButton=()=>
{
    const navigate=useNavigate();
    const logoutHandler=()=>
    {
        localStorage.removeItem('Username');
        localStorage.removeItem('Password');
        navigate('/');
    }

    return(
        <button className='logoutbutton' onClick={logoutHandler}>Log Out</button>
    )
}

export default LogoutButton;