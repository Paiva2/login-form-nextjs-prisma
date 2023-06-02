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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
            width: '90%',
            padding: '8rem 0px 8rem 0px',
          }}
        >
          <h1 style={{ textDecoration: 'underline #807AFF' }}>
            {dynamicTitle}
          </h1>
          {children}
        </div>
      </FormWrapper>

      <ImageContainer>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignSelf: 'flex-end',
              marginLeft: '110px',
              textAlign: 'center',
            }}
          >
            <h1>Welcome back!</h1>
            <p>
              Securely access your account by entering your credentials. We
              prioritize your privacy and data protection, ensuring a safe and
              reliable login experience. If you dont have an account, sign up
              today and join our community of users!
            </p>
          </div>
        </div>
      </ImageContainer>
    </MainContainer>
  )
}

export default FormContainerLayout
