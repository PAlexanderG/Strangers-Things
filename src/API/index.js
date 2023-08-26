// Construct and save your COHORT_NAME in a variable.
// The predicate of the URL is https://strangers-things.herokuapp.com/ + /2004-UNF-HY-WEB-PT
// + path is based on the resource or action you are taking, e.g. /posts to fetch all posts.

const COHORT_NAME = "2302-ACC-PT-WEB-PT-E";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Authentication through JSON Web Tokens
// It is crucial that the value for Authorization is a string starting with Bearer,
// followed by a space, and finished with the token you receive either by registering or logging in.

export async function authorizeFunction(token) {
  try {
    const response = await fetch(`${BASE_URL}api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: {
          title: "Sales...",
          description: "Items posted",
          location: "On Request",
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// JSON Web Token to be passed to the server for requests requiring authentication.

export async function register(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// POST /users/login function

export async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// Route is used to grab an already logged in user's relevant data. It includes messages
// they have received, which might be useful if you wish to build out notifications for the user.
// You must pass a valid token with this request, or it will be rejected.

export async function myData(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

        // Token string? ${BASE_URL} Ask mentor....
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// A post holds information about items for sale, including their cost,
// description, who posted it, and where they are located.
// Request to this endpoint fetches an array of post objects.
// For all users
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// For single users, finishes later....
// By ID as a argument?......

export async function fetchUserPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// A request to this endpoint will attempt to create a new post.
// You must pass a valid token with this request, or it will be rejected.
export async function makePost(
  token,
  title,
  description,
  price,
  willDeliver,
  location
) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
          location,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// (PATCH/post_ID)This endpoint will edit a post whose _id is equal to POST_ID.
// The request will be rejected if it is either missing a valid token, or if the
// user represented by the token is not the user that created the original post.
export async function updatePost(
  POST_ID,
  token,
  title,
  description,
  price,
  location,
  willDeliver
) {
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

//(DELETE /posts/POST_ID) This endpoint will delete a post whose _id is equal to POST_ID. The request will be rejected if it is
// either missing a valid token, or if the user represented by the token is not the user that created the original post.
// Note that this API does not delete posts, but rather sets isActive to false
export async function deletePost(token, POST_ID) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// (POST /posts/POST_ID/messages) This endpoint will create a new message for a post whose _id is
// equal to POST_ID. You must pass a valid token with this request, or it will be rejected.

export async function postMessage(POST_ID, token, content) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
