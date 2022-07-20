import React from "react";
import MyParagraph from "./MyParagrapg";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNIN");
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
