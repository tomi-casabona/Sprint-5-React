export const ArrowButton = ({ throwHandleClick, src, className }) => {
  function handleClick() {
    throwHandleClick();
  }

  return <img className={className} src={src} onClick={handleClick}></img>;
};
