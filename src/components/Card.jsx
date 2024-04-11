import { ArrowButton } from "./ArrowButton";
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
        <div className="content">
          {data.title && <h2>{data.title}</h2>}
          {data.description && <p>{data.description}</p>}
        </div>
        {count <= 1 && (
          <ArrowButton
            throwHandleClick={handleNextClick}
            src={"../public/images/right-arrow.png"}
            className="button"
          ></ArrowButton>
        )}

        {count >= 1 && (
          <ArrowButton
            throwHandleClick={handlePrevClick}
            src={"../public/images/left-arrow.png"}
            className="button-prev"
          ></ArrowButton>
        )}
      </section>
    </>
  );
};
