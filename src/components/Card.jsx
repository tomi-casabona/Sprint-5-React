import { ArrowButton } from "./ArrowButton";
import { ContentText } from "./ContentText";
import { Indicator } from "./Indicator";

export const Card = ({
  data,
  nextLayout,
  prevLayout,
  count,
  quantity,
  animationClass,
}) => {
  //handlers for click scrolling
  const handleNextClick = () => {
    nextLayout();
  };

  const handlePrevClick = () => {
    prevLayout();
  };

  return (
    <>
      <section className={`header ${count === 0 ? "time" : count === 1 ? "programming" : "meditation"}`}>
        <img
          className={`imagen ${animationClass}`}
          src={data[count].image}
          alt=""
        />
      </section>

      <section className="main-container">
        <ContentText data={data[count]} />
      </section>

      <section className="footer">

        <Indicator count={count} quantity={quantity} data={data} />

        <div className="buttons">
          {count <= 1 && (
            <ArrowButton
              throwHandleClick={handleNextClick}
              src={"./images/right-arrow.png"}
              className="next"
            ></ArrowButton>
          )}

          {count >= 1 && (
            <ArrowButton
              throwHandleClick={handlePrevClick}
              src={"./images/left-arrow.png"}
              className="prev"
            ></ArrowButton>
          )}
        </div>
      </section>
    </>
  );
};
