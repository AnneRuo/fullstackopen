import React from 'react'

const Numbers = ({ person }) => {
  return (
    <div>
      <p> {person.name} {person.number} </p>
    </div>  
  )
}

export default Numbers