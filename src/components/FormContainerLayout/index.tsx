import React, { ReactNode } from 'react'
import { FormWrapper, ImageContainer, MainContainer } from './styles'

interface FormContainerInterface {
  children: ReactNode
  dynamicIntro: string
  dynamicTitle: string
}

const FormContainerLayout = ({
  children,
  dynamicIntro,
  dynamicTitle,
}: FormContainerInterface) => {
  return (
    <MainContainer>
      <FormWrapper>
        <div>
          <h1>{dynamicTitle}</h1>
        </div>
        {children}
      </FormWrapper>

      <ImageContainer>
        <div>
          <div style={{ alignSelf: 'flex-end', padding: '40px' }}>
            <h1>Welcome!</h1>
            <p>Happy to have you back!</p>
          </div>
        </div>
      </ImageContainer>
    </MainContainer>
  )
}

export default FormContainerLayout
