import propTypes from 'prop-types';

const PropType = ({name, email, phone}) => {
  return (
    <>
    <h1> {name} </h1>
    <p>{email} - {phone}</p>
    </>
  )
}

PropType.propTypes = {
    name : propTypes.string,
    email : propTypes.string.isRequired,
    phone : propTypes.number,
}
PropType.defaultProps = {
    name : 'Jack',
    email : 'Jack@gmail.com',
    phone : 9593243255,
}

export default PropType;