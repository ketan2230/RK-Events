const Title = (props) => {
  return (
    <div
      className="main-image-wrapper"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
      }}
    >
      <span className="know-text">{props.topHeader}</span>
      <h1 className="page-title">{props.header}</h1>
      <p className="sinse-text">{props.bottomHeader}</p>
    </div>
  );
};

export default Title;
