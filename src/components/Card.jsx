export const Card = ({ data, handleClick }) => {
  const handleButtonClick = () => {
    handleClick();
  };
  console.log(data.image);

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
        <img
          className="button"
          src="../public/images/right-arrow.png"
          onClick={handleButtonClick}
        ></img>
      </section>
    </>
  );
};
