import {useState} from 'react';
import PaystackPop from "@paystack/inline-js";
import { useUserAuth } from "./UserAuthContext";
import "./Pay.css";
import { auth } from "./firebase";
const PaystackIntegration=()=>{
  const {user,logOut}=useUserAuth();
    const[email,setEmail]=useState("");
    const[amount,setAmount]=useState("");
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName ]=useState("");

const payWithPaystack=(e)=>{
  e.preventDefault();
  const paystack= new PaystackPop();
  paystack.newTransaction({
    key:"pk_test_9868f2ae9b5f8b46cd63d97ec66dbc9623d5d707",
    amount:amount * 100 ,
    email,
    firstName,
    lastName,
    onSuccess(transaction){
      let message=`Donation made successfully! Reference ${transaction.reference}`
      alert (message)
      setEmail("")
      setAmount("")
    },
    onCancel(){
      alert("Donation cancelled")
    }

  })

}
    return(
        <div className="investapp">
          <div className="topbar">
   
   <video src="poollogowhite.mp4"className="poolLogo" muted loop AutoPlay/>
       <h2>POOL</h2>
       <div className="myicons">
           <img src="home.svg" />
          
           <img src="binocular.svg"/>
           <img src="message-square.svg"/>
           <img src="iicon.svg"/>
       </div>
       <button className="logout_button" 
   onClick={()=>{logOut(auth)}}>Log Out</button> 
   </div>
          <div className="mypayform">
            <h3 className="text-center">Invest in  Invention</h3>
             <form id="paymentForm" >
 
  <div >
   
    <input type="text" 
    className="thisinput"
    value={firstName}
    placeholder="First Name"
    onChange={(e)=>setfirstName(e.target.value)}
    id="first-name" />
  </div>
  <div >
    
    <input type="text"
      placeholder="Last Name"
    className="thisinput" 
    value={lastName}
    onChange={(e)=>setlastName(e.target.value)}
    id="last-name" />
  </div>
  <div>
    
    <input type="email" 
    className="thisinput"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    id="email-address" required />
  </div>
  <div>
    
    <input type="tel"
    className="thisinput"
    placeholder="Amount"
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
     id="amount" required />
  </div>
  <div>
    
    <input type="password"
  
    placeholder=" Enter Pin"
    
     required />
  </div>
  <div>
    <button  type="submit" onClick={payWithPaystack}> Pay </button>
  </div>
</form>
        </div>
        </div>
        

    )
}
export default PaystackIntegration;