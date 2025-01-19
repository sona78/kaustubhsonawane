import React from "react";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "shards-react";

const Post = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/blog/posts/${props.title}.md`);
      const text = await response.text();
      setPost(text);
    };
    fetchPost();
  }, [props.title]);

  return (
    <div
      style={{
        margin: "20px",
      }}>
      <Markdown>{post}</Markdown>
      <br />
      <div style={{ float: "right", margin: "10px" }}>
        <Button
          onClick={() => {
            window.location.href = "/blog";
          }}
          pill
          theme="dark">
          <BsArrowLeft /> Back
        </Button>
      </div>
    </div>
  );
};

export default Post;
