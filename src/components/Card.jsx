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
        {count<=1 && <img
          className="button"
          src="../public/images/right-arrow.png"
          onClick={handleNextClick}
        ></img>}
        {count>=1 && <img
          className="button-prev"
          src="../public/images/left-arrow.png"
          onClick={handlePrevClick}
        ></img>}
      </section>
    </>
  );
};
