import "./Screen.css";

//Displays the inputs of the calculator
const Screen = (props) => {
    return (
        <div className="screen">
            {props.value}
        </div>
    )
}

export default Screen;