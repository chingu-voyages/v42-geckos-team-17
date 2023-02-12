// ^ - a start of a string
// [a-zA-Z]+ - 1 or more ASCII letters
// (?: - starto of a non-capturing group repeated 0 or more times matching sequences of
// // [-'\s] - a -, ' or whitespace
// // [a-zA-Z]+ - 1+ ASCII letters
// )* - end of the grouping
// $ - end of string

export const validateName = (name) => {
  const regName = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/

  return regName.test(name)
}

export const validatePhone = (phone) => {
  const regPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g

  return regPhone.test(phone)
}

export const validateAmount = (amount) => {
  const regAmount = /^\d+(?:[.,]\d+)*$/g

  return regAmount.test(amount)
}
