import React from 'react'
import PropTypes from 'prop-types'

const ClikButton = ({classname,text,signIn}) => {
  return (
    <button className={classname} onClick={signIn}>{text}</button>
  )
}

ClikButton.defaultprops = {
    text: 'clickme',
    classname:'return-btn'
}

ClikButton.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func,
}

export default ClikButton