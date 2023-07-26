import { useEffect } from "react";
import  {useNavigate } from 'react-router-dom';

const Protected=(props)=>
{
 const {Component}=props;
 const navigate=useNavigate();

useEffect(()=>{
    const username=localStorage.getItem('Username');
    const password=localStorage.getItem('Password');
    if(!(username&&password))
    {
        navigate('/')
    }
})

return(
    <Component></Component>
)
}

export default Protected;