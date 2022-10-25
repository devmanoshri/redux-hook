import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetchingUsingHook() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setError("");
        setPost(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something Went Wrong");
        setPost({});
      });
  });
  return (
    <div>
      {loading ? `<h2>Loading...</h2>` : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingUsingHook;
