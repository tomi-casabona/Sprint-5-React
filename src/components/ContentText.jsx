export const ContentText = ({ data }) => {
  return (
    <div className="content">
      {data.title && <h2>{data.title}</h2>}
      {data.description && <p>{data.description}</p>}
    </div>
  );
};
