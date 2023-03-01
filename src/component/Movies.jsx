
const Movies = ({img,title,year}) => {
  return (
    <div className="movies">
        <img src={img} alt="" />
         <p>{title}</p>
         <p>Year: {year}</p>

    </div>
  )
}

export default Movies