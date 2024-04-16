import { ArrowButton } from "./ArrowButton";
import { ContentText } from "./ContentText";
import { HeaderImage } from "./HeaderImage";
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
      <HeaderImage animationClass={animationClass} count={count} data={data} />

      <section className="main-container">
        <ContentText data={data[count]} />

        <section className="footer">
          <Indicator count={count} quantity={quantity} data={data} />

          <div className="buttons">
            <ArrowButton
              throwHandleClick={handleNextClick}
              src={"./images/right-arrow.png"}
              className={`next ${count === 2 ? "disabled" : "enabled"}`}
            ></ArrowButton>

            <ArrowButton
              throwHandleClick={handlePrevClick}
              src={"./images/left-arrow.png"}
              className={`prev ${count === 0 ? "disabled" : "enabled"}`}
            ></ArrowButton>
          </div>
        </section>
      </section>
    </>
  );
};
