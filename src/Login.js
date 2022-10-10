import "./SignUp.css";
import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const Login = () => {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {logIn}=useUserAuth();
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        try{
    await logIn(email, password);
    navigate('/feed')
        } 
        catch(err){
    setError(err.message)
        }
    
    }
    return ( 
        <div>
        <div className="login">
           
            <div className="signin_grid">
                <div className="grid_one">
                    <video src="poollogo.mp4" muted loop autoPlay/>
                    <h1>Pool</h1>
                    <p>The ultimate meeting ground of inventors and investors</p>
                </div>
                 <div className="grid_three">
<h1>Log In</h1>
{error && <div className="login_errorbox">{error}</div>}
<form onSubmit={handleSubmit}>
{/* <input type="text" className="input_line" placeholder="Username"></input>
<br/> */}

{/* <input type="date" className="input_line" onFocus="(this.type='date')" ></input> */}
{/* <br/> */}
<input type="text" className="input_line" 
onChange={(e)=>setEmail(e.target.value)}
placeholder="E-mail Address"></input>
<br/>
<input type="password" className="input_line"
onChange={(e)=>setPassword(e.target.value)}
 placeholder="Password"></input>
<br/>
 <button className="button">Log In</button>
<br></br>
<Link to ="/" >  <h3>Not on Pool? Create An Account </h3></Link>
</form>
                </div>
           

            </div>
        </div>
        <div className="login_mobile">
        <h1>Pool</h1>
        <br></br>
      <video src="poollogo.mp4" muted loop autoPlay/>
      <br></br>
    
        {error && <div className="login_errorbox">{error}</div>}  
            {/* <h1>Sign Up</h1> */}
            <form onSubmit={handleSubmit}>
                 
            <input type="text" className="input_line" 
onChange={(e)=>setEmail(e.target.value)}
placeholder="E-mail Address"></input>
                <br/>
                <input type="password" className="input_line"
onChange={(e)=>setPassword(e.target.value)}
 placeholder="Password"></input>
                <br/>
                <button className="button">Log In</button>
                <br></br>
                <Link to ="/" >  <h3>Not on Pool? Create An Account </h3></Link>
              
                </form>
    </div>
     
        </div>
        
     );
}
 
export default Login;