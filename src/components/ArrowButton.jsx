export const ArrowButton = ({ throwHandleClick, src, className }) => {
  //handle click callback
  function handleClick() {
    throwHandleClick();
  }

  return <img className={className} src={src} onClick={handleClick}></img>;
};
