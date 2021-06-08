import { useState } from "react";
import Button from "./button";
import "../styles/image.css"; 

const Image = (props) => {
  let [size, setSize] = useState(props.w);

  // set size of image

  const increaseSize = () => {
    const widthValue = parseInt(props.w); 
    setSize(size = widthValue + 0.2 * widthValue);

  };

  const decreaseSize = () => {
    const widthValue = parseInt(props.w); 
    setSize(size = widthValue - 0.2 * widthValue);

  };

  return (
  <>
    <div className="image-container">
      <img
        width={props.size}
        height={props.h}
        src={props.source}
        alt="a cat on a couch"
      ></img>
      </div>

<div>
      <Button clickHandler={increaseSize}>increase</Button>
      <Button clickHandler={decreaseSize}>decrease</Button>
      </div>
    </>

  );
};

export default Image;
