import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useUserAuth } from "./UserAuthContext";
import DeletePost from "./DeletePost";
import "./Posts.css";
import { Link } from "react-router-dom";
const Posts = () => {
  const {user,logOut}=useUserAuth();
    const [posts,setPosts]=useState([]);
    useEffect( ()=>{
      const postRef= collection(db,"PoolPosts");
      const q=query(postRef,orderBy("createdAt", "desc"));
      onSnapshot(q,(snapshot)=>{
        const posts=snapshot.docs.map((doc)=>({
id:doc.id,
...doc.data(),


        }))
        setPosts(posts);
        console.log(posts);
      })
    },[]);

    
    return ( 
        <div>
     { 
        posts.length === 0 ? (
        <p>Oops!No posts found</p>
      ):(
        posts.map(({id,title, likes, comments,description,funding,createdAt,imageUrl,username})=>(
            //  <div className="post_border" key={id}>
            //   <div className="inventor_name">Carl</div>
               
            //             <img src={imageUrl} className="myimage" alt={title}
                        
                        
                        
            //        />
                   
                      
            //             <p>{createdAt.toDate().toDateString()}</p>
            //             <h3>{description}</h3>
            //             <h3>{title}</h3>
            //             <h3>{funding}</h3>
            //             <Link to="/invest"> <button>Invest</button></Link>
                        
            //         </div>

            <div className="instagramcard">
            <div className="instagramcardheader">
              <img src="user.svg" className="instagramcarduserimage"/>
              <h5 className="whoposted"> { username} </h5>
              <div className="instagramcardtime"><p>{createdAt.toDate().toDateString()}</p></div>
            </div>
          
            <div className="instagramcardimage">
              <img src={imageUrl} />
            </div>
            
          
            <div className="instagramcardcontent">
            <h3>Invention Name: {title}</h3>
              {/* <p><h6 className="instagramcardcontentuser" >{user}</h6>{description}</p> */}
         <p>{description}</p>
         <p><DeletePost id={id} imageUrl={imageUrl}/></p>
              {/* <h4 className="usercomment" >sanguine.j@loaf_made</h4> wowwwwww
              <h4 className="usercomment" >spainstakeoverWow</h4> 😍
              <h4 className="usercomment" >edieandottotravelsSo</h4> cool ❄️ */}
            <hr/>
            </div>
            <h4 className="text-center">Funding needed:{funding}</h4>
            <div className="instagramcardfooter">
              
              
              {/* <h6 className="footeractionicons">Like</h6> */}
              <Link to="/invest"> <button className="investbutton">Invest</button></Link>
              {/* <h6 className="footeractionicons" >yes</h6> */}
            </div>
        
          </div>
                
             ))
       
      )
     }
     </div>
     );
}
 
export default Posts ;