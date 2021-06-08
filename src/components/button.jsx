const styleObject = {
  backgroungColor: "#dedede",
  color: '#333',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  border: 'none',
  margin: '10px',
  padding: '10px 25px'
};

const Button = (props) => {
  return <button onClick={props.clickHandler} style={styleObject}>
    {props.children}</button>; {/*to refer to child element of the component*/}
}

export default Button;
