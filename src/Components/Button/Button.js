import React from 'react'
import './Button.css'
import Button from 'react-bootstrap/Button'


const ViewButton = (props) => {
  return (
    // <div className='viewButton'>{props.name}</div>

    <Button variant="danger" size="lg" className='viewButton'>
      { props.name }
    </Button>
  )
}

export default ViewButton