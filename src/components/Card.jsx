export const Card = ({ count, data }) => {
  return (
    <section>
      {data.title && <h2>{data.title}</h2>}
      {data.description && (
        <p>
          <strong>{data.description}</strong>
        </p>
      )}
      <button>Card {count}</button>
    </section>
  );
};
