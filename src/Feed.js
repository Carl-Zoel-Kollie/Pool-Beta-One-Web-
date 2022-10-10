import { useUserAuth } from "./UserAuthContext";

import Posts from "./Posts";

import "./Feed.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import LeftFeedBar from "./LeftFeedBar";
import RightSideBar from "./RightSideBar";
import AddPost from "./AddPost";

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
    <div>
    <div className="coverarea">

   

<div className="myfeed">
    <div className="topbar">
   
    <video src="poollogowhite.mp4"className="poolLogo" muted loop AutoPlay/>
        <h2>POOL</h2>
        <div className="myicons">
            <img src="home.svg" className="activehome"/>
           
          <img src="binocular.svg"/>
            <Link to="/chat"><img src="message-square.svg" className="chaticons"/></Link>
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

{/* feed mobile */}
<div className="feed_mobile">
    <div className="mobile_navbar">
    {/* <video src="poollogowhite.mp4"className="poolLogo" muted loop AutoPlay/> */}
        <h1>POOL</h1>
        <button className="logout_button" 
   onClick={()=>{logOut(auth)}}>Log Out</button> 
    </div>
  <div className="bottombar">
  <img src="home.svg" className="activehome"/>
           
           <img src="binocular.svg"/>
             <Link to="/chat"><img src="message-square.svg" /></Link>
             <img src="iicon.svg"/>
  </div>
  <div className="this_feed">
 
    <div className="makemobilepost">  <h5 >Post your invention</h5><AddPost/></div>
    <div className="postsmobile"><Posts/></div>
  </div>
</div>
</div>

)
}
export default Feed;