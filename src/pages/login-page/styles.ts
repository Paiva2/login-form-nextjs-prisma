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
        height: '2.8125rem',
        pd: '.625rem',
        width: '100%',
        fontSize: '1rem',
        transition: 'background .2s ease-in-out, transform .4s',

        gap: '.625rem',

        '&:hover': {
          background: '#5951e9',
          mozTransform: 'scale(1.05)',
          webKitTransform: 'scale(1.05)',
          transform: 'scale(1.05)',
        },
      },

      socialMediaButton: {
        background: 'none',
        border: 'none',
        br: '9999px',
        pd: '.3125rem',
        font: 0,

        '.facebookIcon': {
          fill: '#4267B2',
          transition: 'all .1s',
          padding: '.3125rem',
        },

        '.facebookIcon:hover': {
          br: '9999px',
          backgroundColor: '#4267B2',
          fill: '#FFF',
        },

        '.googleIcon': {
          fill: '#DB4437',
          transition: 'all .1s',
          padding: '.3125rem',
        },

        '.googleIcon:hover': {
          br: '9999px',
          backgroundColor: '#DB4437',
          fill: '#FFF',
        },

        '.twitterIcon': {
          br: '9999px',
          fill: '#1DA1F2',
          transition: 'all .1s',
          padding: '.3125rem',
        },

        '.twitterIcon:hover': {
          backgroundColor: '#1DA1F2',
          fill: '#FFF',
        },
      },
    },
  },
})

export const SocialMediaWrapper = styled('div', {
  display: 'flex',
  gap: '1rem',
  padding: '.9375rem .3125rem 0px .3125rem',
  borderBottom: '3px solid #807AFF',
})
