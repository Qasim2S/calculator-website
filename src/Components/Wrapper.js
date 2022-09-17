import "./Wrapper.css";

//The frame of the calculator
//Will hold all the components together 
const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };
  
  export default Wrapper;