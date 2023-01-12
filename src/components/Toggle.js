import React from "react";
import react, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
