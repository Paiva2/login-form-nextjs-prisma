import React, { ReactNode } from 'react'
import {
  FormMiddleSection,
  FormWrapper,
  ImageContainer,
  MainContainer,
  SideTextContainer,
} from './styles'

interface FormContainerInterface {
  children: ReactNode
  dynamicPageName: string
  dynamicIntro: string
  dynamicGreeting: string
}

const FormContainerLayout = ({
  children,
  dynamicIntro,
  dynamicGreeting,
  dynamicPageName,
}: FormContainerInterface) => {
  return (
    <MainContainer>
      <FormWrapper>
        <FormMiddleSection className="test">
          <h1>{dynamicPageName}</h1>
          {children}
        </FormMiddleSection>
      </FormWrapper>
      <ImageContainer>
        <div>
          <SideTextContainer>
            <h1>{dynamicGreeting}</h1>
            <p>{dynamicIntro}</p>
          </SideTextContainer>
        </div>
      </ImageContainer>
    </MainContainer>
  )
}

export default FormContainerLayout
