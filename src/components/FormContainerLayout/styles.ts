import { styled } from '@/config/styles-config'

export const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  w: '55%',
  minWidth: '960px',
  m: '0 auto',
  backgroundColor: '#FFFF',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
  h: '46.875rem',
  justifyContent: 'center',
  br: '5px',

  '@media(max-width: 980px)': {
    minWidth: '95%',
  },

  '@media(max-width: 880px)': {
    flexDirection: 'column-reverse !important',
    h: 'auto',
  },
})

export const FormWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  w: '50%',
  h: '90%',
  color: '#5A6268',

  '@media(max-width: 880px)': {
    w: '100%',
  },

  h1: {
    textAlign: 'center',
  },

  form: {
    w: '100%',
    h: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2.1875rem',

    '@media(max-width: 880px)': {
      paddingBottom: '.625rem',
    },
  },
})

export const FloatInputWrapper = styled('div', {
  position: 'relative',

  '@sm': {
    w: '85%',
  },

  label: {
    fontSize: '1.125rem',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'text',
    transition: '.2s ease-in-out',
    userSelect: 'none',
  },

  input: {
    paddingLeft: '.3125rem',
    w: '19.625rem',
    h: '1.875rem',
    fontSize: '1.125rem',
    border: 0,
    borderBottom: '2px solid #706AE5',
    outline: 'none',

    '@sm': {
      w: '100%',
    },

    '&:focus + label': {
      top: -25,
      pointerEvents: 'none',
      fontSize: '.9375rem',
    },

    '&:valid + label': {
      pointerEvents: 'none',
    },
  },
})

export const ImageContainer = styled('div', {
  h: '100%',
  w: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
  opacity: 0.8,
  backgroundImage: 'radial-gradient(#000dff 1.5px, #ffffff 1.5px)',
  backgroundSize: '1.875rem 1.875rem',

  '@media(max-width: 880px)': {
    w: '100%',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    h: '100%',
    w: '100%',
    backgroundImage: 'url("https://i.imgur.com/OeloDl2.jpg")',
    backgroundSize: 'cover',
    color: '#FFF',
    paddingRight: '.625rem',

    '@media(max-width: 880px)': {
      pd: 0,
    },
  },
})

export const FormFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '.8125rem',

  '@sm': {
    w: '85%',
  },

  span: {
    color: '#807AFF',
    fontWeight: 700,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export const FormMiddleSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
  w: '90%',
  h: '100%',
  br: '5px',
  pd: '2.9375rem 0px 0px 0px',

  '@media(max-width: 880px)': {
    w: '100%',
  },

  h1: {
    textDecoration: 'underline #807AFF',
  },
})

export const SideTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.625rem',
  alignSelf: 'flex-end',
  w: '70%',
  textAlign: 'center',
  overflowY: 'auto',

  '@media(max-width: 880px)': {
    h1: {
      fontSize: '1.125rem',
    },

    p: {
      fontSize: '.875rem',
    },

    w: '40%',
    alignSelf: 'center',
    mt: '5rem',
    paddingBottom: '.625rem',
  },

  '@media(max-width: 525px)': {
    h: '60%',
    overflowY: 'scroll',
    mt: 'unset',
  },

  '@media(max-width: 425px)': {
    w: '60%',
    mt: '5rem',
  },
})
