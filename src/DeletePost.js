import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "./firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function DeletePost({ id, imageUrl }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteDoc(doc(db, "PoolPosts", id));
       alert("Post deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
       alert("Error deleting post", { type: "error" });
        console.log(error);
      }
    }
  };
  return (
    <div>
      <button
       
        onClick={handleDelete}
        style={{ background:"red" }}
      > Delete </button>
    </div>
  );
}