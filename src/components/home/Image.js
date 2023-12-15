const Image = (props) => {
  return (
    <div className="image-wrapper" style={{ backgroundImage: `url(${props.image}), linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))` }}>
    </div>
  )
}

export default Image