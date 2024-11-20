import ListPost from "@/components/ListPost";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async ()=>{
      try {
        const response = await fetch('/api/posts');
        if(!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json();
      setPosts(data)
      } catch (error) {
        console.error(error);
      }
    }
   fetchPosts();
  }, [])
  

  return (
   <div>
     <ListPost posts={posts} />
   </div>
  );
}
