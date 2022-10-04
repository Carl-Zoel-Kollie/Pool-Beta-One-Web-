import "./Homescreen.css";
import {useState}from "react";
import{Link,useNavigate} from "react-router-dom";
import {useUserAuth} from "./UserAuthContext";
const Homescreen = () => {
const [email,setEmail]=useState("");
const[password,setPassword]=useState("");
const {signUp}=useUserAuth();
const navigate=useNavigate();
const[error,setError]=useState('');
const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
await signUp(email, password);
navigate('/login')
    } 
    catch(err){
setError(err.message)
    }

}
    return ( 
        <div className="home">
            {/* <video src="poolbgvideo.mp4" muted loop autoPlay/> */}
            <div className="signin_grid">
                <div className="grid_one">
                    <video src="poollogo.mp4" muted loop autoPlay/>
                    <h1>Pool</h1>
                    <p>The ultimate meeting ground of inventors and investors</p>
                </div>
                <div className="grid_two">
                  {error && <div>{error}</div>}  
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="text" className="input_line" placeholder="E-mail address" onChange={(e)=>setEmail(e.target.value)}></input>
                        <br/>
                        <input
                        onChange={(e)=>setPassword(e.target.value)}
                         type="password" className="input_line" placeholder="Password"></input>
                        <br/>
                        <button className="button">Sign Up</button>
                        <br></br>
                      <Link to ="/login"> <h3 className="create_text">Already on Pool? Sign In</h3></Link>
                      
                        </form>
                </div>

              

            </div>
        </div>
     );
}
 
export default Homescreen;