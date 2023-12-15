const Title = (props) => {
  return (
    <div className="main-image-wrapper">
      <span className="know-text">{props.topHeader}</span>
      <h1 className="page-title">{props.header}</h1>
      <p className="sinse-text">{props.bottomHeader}</p>
    </div>
  )
}

export default Title