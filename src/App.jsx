import { useState } from "react";
import { Card } from "./components/Card.jsx";
import "./App.css";

const tutorialData = [
  {
    title: "Dedica moltas hores",
    description:
      "Un minim de 30 horas a la setmana. Si no en tens prou, huarás de dedicarli més hores. Al principi sembla imposible peró notaras una millora  rápidament.",
    bgColor: "white",
    image: "./images/time_management.svg",
  },
  {
    title: "Programa projectes propis",
    description:
      "Mes val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implementacio en el projecte ajudara a acelerar el teu aprenentatge",
    bgColor: "white",
    image: "./images/programming.svg",
  },
  {
    title: "Procura descansar",
    description:
      "Descansar bé i desconectar son vitals. D'aquesta manera reduiras l'estress y l'ansietat. Milloraras la teva concentració i consolidarás el teu aprenentatge",
    bgColor: "white",
    image: "./images/meditation.svg",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Sprint-5 React</h1>
      <Card count={count} data={tutorialData[0]}></Card>
    </main>
  );
}

export default App;

