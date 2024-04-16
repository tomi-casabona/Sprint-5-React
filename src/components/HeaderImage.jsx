export const HeaderImage = ({ animationClass, data, count }) => {
  return (
    <div
      className={`header ${count === 0 ? "time" : count === 1 ? "programming" : "meditation"}`}
    >
      <img
        className={`imagen ${animationClass}`}
        src={data[count].image}
        alt=""
      />
    </div>
  );
};
