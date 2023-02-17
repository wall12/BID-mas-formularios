import React from 'react'

const Resultados = (props) => {

  const {name, lastName, email, password, confirmPassword} =props.datos;

  return (
    <div className='result'>
      <h1>Your Form Date</h1>
      <p>First Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default Resultados