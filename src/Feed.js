import { useUserAuth } from "./UserAuthContext";

import Posts from "./Posts";

import "./Feed.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import LeftFeedBar from "./LeftFeedBar";
import RightSideBar from "./RightSideBar";

const Feed=()=>
{
    const {user,logOut}=useUserAuth();
//     const handleLog0ut= async()=>{
//         try{
// await logOut();

//         }
//         catch (err){
//            console.log(err.message) 
//         }
//     }
return(
    <div className="coverarea">

   

<div className="myfeed">
    <div className="topbar">
   
    <video src="poollogowhite.mp4"className="poolLogo" muted loop AutoPlay/>
        <h2>POOL</h2>
        <div className="myicons">
            <img src="home.svg" className="activehome"/>
           
          <img src="binocular.svg"/>
            <img src="message-square.svg"/>
            <img src="iicon.svg"/>
        </div>

   <button className="logout_button" 
   onClick={()=>{logOut(auth)}}>Log Out</button> 
   </div>
   <div className="addposts">
      <LeftFeedBar/>
    </div>
    <div className="postarea">
        <Posts/>
    </div>
    {/* <div className="trending">
        <RightSideBar/>
    </div> */}
    

</div>
</div>

)
}
export default Feed;