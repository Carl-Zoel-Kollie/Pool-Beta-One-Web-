import { addDoc, collection, Timestamp } from "firebase/firestore";
import './AddPost.css';
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "./firebase";


const AddPost = () => {
    const [progress,setProgress]=useState(0)
   
    const[formData, setFormData]=useState(
        {
            title:"",
            description:"",
            image:"",
            funding:"",
            username:"",
            createdAt:Timestamp.now().toDate(),

        }
    );
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
    const handlePublish = () => {
        if (!formData.title ||!formData.username|| !formData.description || !formData.image ||!formData.funding) {
          alert("Please fill all the fields");
          return;
        }
    
        const storageRef = ref(
          storage,
          `/images/${Date.now()}${formData.image.name}`
        );
    
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
    
        uploadImage.on(
          "state_changed",
          (snapshot) => {
            const progressPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
          },
          (err) => {
            console.log(err);
          },
          () => {
            setFormData({
              title: "",
              description: "",
              image: "",
              funding:"",
              username:"",
            });
    
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
              const postRef = collection(db, "PoolPosts");
              addDoc(postRef, {
                title: formData.title,
                description: formData.description,
                username:formData.username,
                imageUrl: url,
                createdAt: Timestamp.now().toDate(),
                funding:formData.funding,
               
                
          
              })
                .then(() => {
                  toast("Post added successfully", { type: "success" });
                  setProgress(0);
                })
                .catch((err) => {
                  toast("Error adding post", { type: "error" });
                });
            });
          }
        );
      };
    return ( 
        <div className="border p-3 mt-3 bg-light postbox" style={{position:"fixed"}}>
            <h5>Post your invention</h5>
            <label>Name of inventor</label>
            <input type="text" name="username"
            onChange={(e)=>handleChange(e)} 
            value={formData.username}
            className="form-control"/>
            <label>Name of invention</label>
            <input type="text" name="title"
            onChange={(e)=>handleChange(e)} 
            value={formData.title}
            className="form-control"/>

            <label>Description</label>
         <textarea name="description"
          value={formData.description}
          onChange={(e)=>handleChange(e)} 
           className="form-control"/>
        
         <label>Funding needed</label>
            <input
             type="text" 
            name="funding" 
            onChange={(e)=>handleChange(e)} 
             value={formData.funding}
             className="form-control"
             />
       
       <label>Image</label>
       <input 
        type="file"
        name="image"
        accept="image/*"
        className="form-control"
        onChange={(e) => handleImageChange(e)}

        />
       

      {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button

            onClick={handlePublish}
          >
            {/* <img src="send.svg"/> */}
            <h6>Post</h6>
          </button>
        </div>
      )}
export default AddPost; 