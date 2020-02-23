import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type: FETCH_POSTS,
          payload: data
        });
      });
  };
}

export function createPost(post) {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => {
        return dispatch({
          type: NEW_POST,
          payload: post
        });
      });
  };
}
