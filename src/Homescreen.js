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
        <div>
        <div className="home">
            {/* <video src="poolbgvideo.mp4" muted loop autoPlay/> */}
            <div className="signin_grid">
                <div className="grid_one">
                    <video src="poollogo.mp4" muted loop autoPlay/>
                    <h1>Pool</h1>
                    <p>The ultimate meeting ground of inventors and investors</p>
                </div>
                <div className="grid_two">
                  {error && <div className="errorbox">{error}</div>}  
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

        <div className="home_mobile">
        <p style={{margin:"auto",width:"50%",padding:10}}>
                   
                   <h4 style={{color:"white", fontFamily:"Times New Roman",textAlign:"center"}}>This deployed web version of Pool:Beta One can only be viewed on a laptop. Reload the link on your laptop to interact with the app. Subscribe to the CZK Code YouTube channel to get notified when the mobile version is deployed.</h4>
       <a style={{ marginLeft:"20",width:"100%",padding:10, fontSize:"1.2em" ,textAlign:"center"}}href="https://www.youtube.com/watch?v=qYOqGp23Z8k">Click to Watch Video on Pool:Beta One </a>
       </p>
        {/* <h1>Pool</h1>
        <br></br>
      <video src="poollogo.mp4" muted loop autoPlay/>
      <br></br>
    
        {error && <div className="errorbox">{error}</div>}  
            
            <form onSubmit={handleSubmit}>
                 
                <input type="text"  className="input_line" placeholder="E-mail address" onChange={(e)=>setEmail(e.target.value)}></input>
                <br/>
                <input
                className="input_line"
                onChange={(e)=>setPassword(e.target.value)}
                 type="password"  placeholder="Password"></input>
                <br/>
                <button className="button" >Sign Up</button>
                <br></br>
              <Link to ="/login"> <h3 >Already on Pool? Sign In</h3></Link>
              
                </form> */}
    </div>
    </div>
     );
}
 
export default Homescreen;