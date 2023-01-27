import React from 'react'

// Styled components
import { FormCheckGroupContainer } from '../../styles/form/FormCheckGroupStyles'

function FormCheckGroup({ label, name, isChecked, handleChange }) {
  return (
    <FormCheckGroupContainer>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor={name}>{label}</label>
    </FormCheckGroupContainer>
  )
}

export default FormCheckGroup
