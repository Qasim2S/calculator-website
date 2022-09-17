import "./Buttonbox.css"

//Similar to the wrapper, it is the frame for the buttons and hold them together
const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;