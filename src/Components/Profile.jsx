// import the useState hook from React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myData } from "../API";
import { makePost } from "../API";

export default function Profile(_id) {
  const POST_ID = {
    token: localStorage.getItem("token"),
    title: "title",
    description: "description",
    price: 5,
    location: "location",
    willDeliver: true,
  };

  const [post, setPost] = useState(POST_ID);
  const navigate = useNavigate();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  }

  useEffect(() => {
    const data = async () => {
      const response = await myData(localStorage.getItem("token"));
      console.log(response);
    };

    data();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(post.token);
    await makePost(
      localStorage.getItem("token"),
      post.title,
      post.description,
      post.price,
      !!post.willDeliver,
      post.location
    );
    // // navigate("/post");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a New Post:</label>
        <input type="text" name="title" onChange={handleChange} />
        <input type="text" name="description" onChange={handleChange} />
        <input type="text" name="price" onChange={handleChange} />
        <input type="text" name="willDeliver" onChange={handleChange} />
        <input type="text" name="location" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
