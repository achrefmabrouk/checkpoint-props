import propTypes from 'prop-types'
const Fullname = ({name}) => {
    return (
        <div>
           <h3>MY NAME IS : {name}</h3>
        </div>
    )
}
Fullname.propTypes={
    name: propTypes.string
}
export default Fullname 