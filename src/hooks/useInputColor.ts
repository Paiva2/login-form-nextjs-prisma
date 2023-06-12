export function useInputColors(
  firstInput: string,
  secondInput: string,
  thirdInput?: string,
) {
  let checkFilledInputs = false

  if (firstInput || secondInput || thirdInput) {
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
