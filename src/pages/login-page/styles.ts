import { styled } from '@/config/styles-config'

export const FormWrapper = styled('form', {})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  variants: {
    buttonType: {
      signIn: {
        background: '#706AE5',
        br: '5px',
        color: '#fff',
        border: 0,
        height: '45px',
        pd: '10px',
        width: '100%',
        fontSize: '16px',
        transition: 'background .2s ease-in-out, transform .4s',

        gap: '10px',

        '&:hover': {
          background: '#5951e9',
          mozTransform: 'scale(1.05)',
          webKitTransform: 'scale(1.05)',
          transform: 'scale(1.05)',
        },
      },

      socialMediaButton: {
        background: 'transparent',
        border: 'none',
      },
    },
  },
})

export const SocialMediaWrapper = styled('div', {
  display: 'flex',
  gap: '10px',
  padding: '.9375rem .3125rem 0px .3125rem',
  borderBottom: '2px solid #807AFF',
})
