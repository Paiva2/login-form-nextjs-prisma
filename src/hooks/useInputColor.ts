export function useInputColors(
  firstInput: string | number, // some inputs on react-hook-form are typed as numbers (password for example)
  secondInput: string | number,
  thirdInput?: string | number,
) {
  let checkFilledInputs = false

  if (firstInput || secondInput || thirdInput) {
    checkFilledInputs = true
  } else {
    checkFilledInputs = false
  }

  const isAnyInputFilled = checkFilledInputs ? { color: 'red' } : {}

  return { isAnyInputFilled }
}
