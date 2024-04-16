import { useState } from "react";
import { Card } from "./Card";
import "../App.css";
import { tutorialData } from "../constants/constants";

function App() {
  const [count, setCount] = useState(1);
  const quantity = tutorialData.length;
  //const [ entringFrom, setEntringFrom ] = useState(null);
  const [animationClass, setAnimationClass] = useState(null);

  // functions for change the count state
  const nextStep = () => {
    setAnimationClass("exitingToRight");

    setTimeout(() => {
      setCount((prevCount) => (prevCount + 1) % quantity);
      setAnimationClass("startingFromLeft");
    }, 200);
  };

  const prevStep = () => {
    setAnimationClass("exitingToLeft");

    setTimeout(() => {
      setCount((prevCount) => (prevCount - 1 + quantity) % quantity);
      setAnimationClass("startingFromRight");
    }, 200);
  };

  return (
    <main className="main">
      <Card
        nextLayout={nextStep}
        prevLayout={prevStep}
        count={count}
        data={tutorialData}
        quantity={quantity}
        animationClass={animationClass}
      ></Card>
    </main>
  );
}

export default App;
