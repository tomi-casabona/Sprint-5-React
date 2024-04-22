import { StyledCircle } from "./StyledCircle.jsx";

export const Indicator = ({ data, count }) => {
  return (
    <div className="indicator">
      {data.map((e, index) => {
        console.log("index: " + index);
        console.log("count: " + count);
        return <StyledCircle count={count} key={index} positionIndex={index} />;
      })}
    </div>
  );
};
