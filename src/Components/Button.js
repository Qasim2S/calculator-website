import "./Button.css";

//Will input what was pressed into the calculator
//Each button will be different depending on their label
const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;