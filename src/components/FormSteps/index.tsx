import React from 'react'
import { Step, Steps } from './styles'

interface FormStepInterface {
  currentStep: number
  size: number
}

const FormSteps = ({ currentStep, size }: FormStepInterface) => {
  return (
    <div>
      <label>
        Passo {currentStep} de {size}
      </label>

      <Steps>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </div>
  )
}

export default FormSteps
