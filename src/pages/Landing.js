import Navbar from "./Navbar";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Landing=()=>
{
    const hasUsername=localStorage.getItem('Username');
    const hasPassword=localStorage.getItem('Password');
    const navigate=useNavigate();
    useEffect(()=>{
  
        if(hasPassword&&hasUsername)
        {
            navigate('/home')
        }
    });
return(
    <>
    <Navbar></Navbar>
    <Form></Form>
    </>
)
}

export default Landing;