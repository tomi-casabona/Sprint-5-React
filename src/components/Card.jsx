import { ArrowButton } from "./ArrowButton";
import { ContentText } from "./ContentText";
import { Indicator } from "./Indicator";

export const Card = ({ data, nextLayout, prevLayout, count }) => {
  const handleNextClick = () => {
    nextLayout();
  };
  const handlePrevClick = () => {
    prevLayout();
  };

  return (
    <>
      <section className="header">
        <img className="image" src={data.image} alt="" />
      </section>

      <section className="main-container">
        <ContentText data={data} />
      </section>

<section className="footer">

      {count <= 1 && (
        <ArrowButton
          throwHandleClick={handleNextClick}
          src={"./images/right-arrow.png"}
          className="button"
        ></ArrowButton>
      )}

      {count >= 1 && (
        <ArrowButton
          throwHandleClick={handlePrevClick}
          src={"./images/left-arrow.png"}
          className="button-prev"
        ></ArrowButton>
      )}
      
      <Indicator className="indicator" pasos={count} />

</section>
    </>
  );
};
