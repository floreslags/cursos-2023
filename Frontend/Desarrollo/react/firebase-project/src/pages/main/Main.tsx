import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post,key) => (
        <Post key={key} post = {post} />
      ))}
    </div>
  );
};
