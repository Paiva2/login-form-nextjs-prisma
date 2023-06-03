import { styled } from '@/config/styles-config'

export const FormWrapper = styled('form', {})

export const FormErrorsWrapper = styled('div', {
  minHeight: '3.4375rem',

  fontSize: '.75rem',
  color: '#D83131',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  variants: {
    buttonType: {
      backPageIcon: {
        background: '#706AE5',
        color: '#fff',
        border: 0,
        pd: '.625rem',
        br: '9999px',
        transition: 'background .2s ease-in-out, transform .4s',

        '&:hover': {
          background: '#5951e9',
          mozTransform: 'scale(1.05)',
          webKitTransform: 'scale(1.05)',
          transform: 'scale(1.05)',
        },
      },

      confirmResetPassword: {
        background: '#706AE5',
        br: '5px',
        color: '#fff',
        border: 0,
        height: '2.8125rem',
        width: '19.625rem',
        fontSize: '1rem',
        transition: 'background .2s ease-in-out, transform .4s',

        '&:hover': {
          background: '#5951e9',
          mozTransform: 'scale(1.05)',
          webKitTransform: 'scale(1.05)',
          transform: 'scale(1.05)',
        },
      },
    },
  },
})

export const SocialMediaWrapper = styled('div', {
  display: 'flex',
  padding: '.9375rem .3125rem 0px .3125rem',
  borderBottom: '3px solid #807AFF',
})
