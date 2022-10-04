import { useUserAuth } from "./UserAuthContext";
import './LeftFeedBar.css';
import AddPost from "./AddPost";
const LeftFeedBar=()=>{
    const {user,logout}=useUserAuth();
    return(
        
<div className="leftbgdesign">
    {/* overall container */}

   
 {/* user profile photo*/}
<div className="userarea">
    <img src="user.svg" alt="user" className="userimage"/>
</div>
 {/* user profile photo*/}
<div className="namearea">
    <h4>{ user && user.email} </h4>
</div>

<div>
    <AddPost/>
</div>
</div>
    )
}
export default LeftFeedBar;