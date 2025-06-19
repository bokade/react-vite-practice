import "./ImageComp.css";
import { useState } from "react";
function ImageComp() {
  let [title, setTitle] = useState("React");

  let [url, setUrl] = useState(
    "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4088805/cover_image/regular_1708x683/cover-react-context-api-dc30b2b6fe1acf1acc567087076e26d3.png"
  );

  const changeToAngular = () => {
    setUrl(
      "https://th.bing.com/th/id/OIP.cGDDA2mfYkjiIhGaN8gDoAHaEK?rs=1&pid=ImgDetMain"
    );
    setTitle("Angular");
  };

  const changeToReact = () => {
    setUrl(
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4088805/cover_image/regular_1708x683/cover-react-context-api-dc30b2b6fe1acf1acc567087076e26d3.png"
    );

    setTitle("React");
  };

  return (
    <div id="ImageComp">
      <h1 style={{ color: "red" }}>{title}</h1>
      <img src={url} width="500" height="300" />
      <br />
      <br />
      <button onClick={changeToReact}>React</button>
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageComp;
