export function useInputColors(
  firstInput: string,
  secondInput: string,
  thirdInput?: string,
  fourthInput?: string,
) {
  let checkFilledInputs = false

  if (firstInput || secondInput || thirdInput || fourthInput) {
    checkFilledInputs = true
  } else {
    checkFilledInputs = false
  }

  const isAnyInputFilled = checkFilledInputs
    ? {
        color: 'red',
      }
    : {}

  return { isAnyInputFilled }
}
