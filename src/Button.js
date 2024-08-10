export default function Button({ url }) {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button className="learn-more-button" onClick={handleClick}>
      <img src="https://svgshare.com/i/ff6.svg" className="icon-button" />
      Learn more
    </button>
  );
}
