import React, { useEffect, useState } from "react"
import axios from "axios";
function Dashboard(){
    const [quote,setQuote] = useState('');
   
    const [temp,setTemp] = useState('');

    function updateQuote(e){
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:8000/update',{
            token,temp
        }).then((res)=>{
            setQuote(res.data.quote);
            console.log(res);
        }).catch((err)=>{
            console.log("unable to update client side", err);
        })
        setTemp('');
    }

    function populateQuote(token){

        axios.post('http://localhost:8000/populate',{
            token
        }).then((res)=>{
            console.log(res);
            setQuote(res.data.quote);
        }).catch((err)=>{
            console.log("unable to authenticate client side", err);
        })
    }

    function LogOut(){
         localStorage.removeItem('token');
         alert('Log Out successfully');
         window.location.href='/login';
    }

     useEffect(()=>{
    
            const token = localStorage.getItem('token');
            if(!token){
                window.location.href= '/login';
            }else{
                populateQuote(token);
            }
               
         
     },[])



    return(
        <div>

            <h1> Here's your quote : {quote} </h1>

            <form method="POST" onSubmit={updateQuote}>
                <input type="text" value = {temp}  placeholder="Enter new quote" onChange={(e)=>setTemp(e.target.value)} />
                <input type="submit" />

            </form>

            <button onClick={LogOut} > Logout</button>
        </div>
    )
}

export default Dashboard;

