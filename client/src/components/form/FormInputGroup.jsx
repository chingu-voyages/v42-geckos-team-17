import React from 'react'

// Styled components
import { FormInputGroupContainer } from '../../styles/form/FormInputGroupStyles'

function FormInputGroup({
  label,
  type,
  name,
  value,
  handleChange,
  placeholderText,
}) {
  return (
    <FormInputGroupContainer>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholderText || name}
      />
    </FormInputGroupContainer>
  )
}

export default FormInputGroup
