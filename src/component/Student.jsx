import propTypes from 'prop-types'

export const Student = ({name,age}) => {
  return (
    <>
     <h1>Student name: {name} and {age} </h1>
    </>
   
  )

}
Student.propTypes = {
    namme:propTypes.string,
    age: propTypes.number
}
Student.defaultProps = {
    namme:"sumit",
    age: 22
}
