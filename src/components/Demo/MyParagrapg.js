import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph RUNNIN");
  return <p>{props.children}</p>;
};

export default MyParagraph;
