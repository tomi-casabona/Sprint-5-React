import { useState } from "react";
import { Card } from "./components/Card.jsx";
import "./App.css";

const tutorialData = [
  {
    title: "Dedica moltas hores",
    description:
      "Un minim de 30 horas a la setmana. Si no en tens prou, huarás de dedicarli més hores. Al principi sembla imposible peró notaras una millora  rápidament.",
    bgColor: "white",
    image: "./public/images/time_managment.svg",
  },
  {
    title: "Programa projectes propis",
    description:
      "Mes val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implementacio en el projecte ajudara a acelerar el teu aprenentatge",
    bgColor: "white",
    image: "./public/images/programming.svg",
  },
  {
    title: "Procura descansar",
    description:
      "Descansar bé i desconectar son vitals. D'aquesta manera reduiras l'estress y l'ansietat. Milloraras la teva concentració i consolidarás el teu aprenentatge",
    bgColor: "white",
    image: "./public/images/meditation.svg",
  },
];

function App() {
  const [count, setCount] = useState(0);

  function nextStep() {
    if (count === 0) setCount(1);
    if (count === 1) setCount(2);
    if (count === 2) setCount(0);
  }
  function prevStep() {
    if (count === 0) setCount(2);
    if (count === 1) setCount(0);
    if (count === 2) setCount(1);
  }

  return (
    <main className="main">
      <Card
        nextLayout={nextStep}
        prevLayout={prevStep}
        count={count}
        data={tutorialData[count]}
      ></Card>
    </main>
  );
}

export default App;
