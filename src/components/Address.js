import propTypes from 'prop-types'
const Address = ({address}) => {
    return (
        <div>
<p> I live in : {address} </p>
        </div>
    )
}
Address.propTypes={
    address: propTypes.string
}
export default Address