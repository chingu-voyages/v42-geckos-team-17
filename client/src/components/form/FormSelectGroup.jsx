import React, { useEffect, useState } from 'react'

// HeadlessUi
// https://headlessui.com/
import { Listbox } from '@headlessui/react'

// Styled components
import { FormSelectGroupContainer } from '../../styles/form/FormSelectGroupStyles'

// Icon
import { DropDownIcon } from '../../assets/icons/icons'

function FormSelectGroup({
  label,
  name,
  options,
  handleChange,
  placeholderText,
  errorMsg,
}) {
  const [selectedOption, setSelectedOption] = useState(placeholderText)

  useEffect(() => {
    handleChange(selectedOption)
  }, [selectedOption])

  return (
    <FormSelectGroupContainer>
      <label htmlFor={name}>{label}</label>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button>
          {selectedOption}
          <span>
            <DropDownIcon aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Listbox.Options>
          <Listbox.Option
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? 'bg-link text-white' : 'text-text-200'
              }`
            }
            key={placeholderText}
            value={placeholderText}
          >
            {placeholderText}
          </Listbox.Option>
          {options.map((option) => (
            <Listbox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-link text-white' : 'text-text-200'
                }`
              }
              key={option}
              value={option}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <span>{errorMsg}</span>
    </FormSelectGroupContainer>
  )
}

export default FormSelectGroup
