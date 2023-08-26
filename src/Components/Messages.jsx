import { useState, useEffect } from "react";
// import { myData } from "../API";
// import { fetchPosts } from "../API";

// Endpoint will create a new message for a post whose _id is
// equal to POST_ID. You must pass a valid token with this request,
// or it will be rejected.

export default function Messages() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    async function fetchMyData() {
      // const { data } = await fetchMessage();
      setMessage(data.messages);
      console.log(data.messages);
      // setLoading(false);
    }
    fetchMyData();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
    </div>
  );
}
// Create DELETE & EDIT post buttons
{
  /* Ask Mentor for buttons */
}
{
  /* Add DELETE BUTTON.... */
}
// <button onClick={() => deletePostId(post.id)}>Delete</button>
{
  /* Add EDIT BUTTON */
}
// <button onClick={() => updatePost(post.id)}>Edit</button>
