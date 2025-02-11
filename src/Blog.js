import useMediaQuery from "@material-ui/core/useMediaQuery";

import Post from "./Post";
import Display from "./Display";
import Header from "./sections/header";
import Password from "./Password";
import { useState } from "react";

function getImagePaths(directory) {
  let posts = [];
  directory.keys().map((item, index) => posts.push(item.replace("./", "")));
  return posts;
}
function getBlogTitles(images) {
  let titles = images.map((item) => item.replace(/\.(png|jpe?g|svg)$/, ""));
  return titles;
}

const directory = require.context("../public/blog/covers", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);
let blogTitles = getBlogTitles(imagePaths);

const Blog = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const post = window.location.pathname.replace("/blog/post/", "");

  const [password, setPassword] = useState("");

  return password.toLowerCase() !== "abroad" &&
    (window.location.pathname === "/blog" || window.location.pathname === "/blog/") ? (
    <Password password={password} setPassword={setPassword} />
  ) : (
    <>
      <div
        className="App"
        style={{ marginLeft: matches ? "5%" : "20%", marginRight: matches ? "5%" : "20%" }}>
        {blogTitles.includes(decodeURIComponent(post)) ? (
          <Post title={decodeURIComponent(post)} />
        ) : (
          <>
            <Header isMain={false} />
            <div style={{ margin: "1vw" }}>
              And this is my blog! I've started this corner as a way to share my travels and
              thoughts with my closest friends as I study abroad this semester. Thanks for taking a
              look!
            </div>
            <Display images={imagePaths} />
          </>
        )}
      </div>
    </>
  );
};
export default Blog;
