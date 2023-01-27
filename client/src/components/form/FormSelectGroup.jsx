import React from 'react'

// Styled components
import { FormSelectGroupContainer } from '../../styles/form/FormSelectGroupStyles'

function FormSelectGroup({
  label,
  name,
  options,
  handleChange,
  placeholderText,
}) {
  return (
    <FormSelectGroupContainer>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={handleChange}>
        {placeholderText && <option value="">{placeholderText}</option>}
        {options.map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
      </select>
    </FormSelectGroupContainer>
  )
}

export default FormSelectGroup
