export const Card = ({ count, data, handleClick }) => {
  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <section>
      {data.title && <h2>{data.title}</h2>}
      {data.description && (
        <p>
          <strong>{data.description}</strong>
        </p>
      )}
      <button onClick={handleButtonClick}>Card {count}</button>
    </section>
  );
};
