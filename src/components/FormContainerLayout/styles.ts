import { styled } from '@/config/styles-config'

export const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  margin: '0 auto',
  backgroundColor: '#FFFF',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
  height: '43.75rem',
  justifyContent: 'center',
  br: '5px',
})

export const FormWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '55%',
  color: '#5A6268',

  h1: {
    textAlign: 'center',
  },

  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '35px',
  },
})

export const FloatInputWrapper = styled('div', {
  position: 'relative',

  label: {
    fontSize: '18px',
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
    paddingLeft: '5px',
    width: '250px',
    height: '30px',
    fontSize: '18px',
    border: 0,
    borderBottom: '2px solid #706AE5',
    outline: 'none',

    '&:focus': {
      borderBottom: '2px solid #807AFF',
    },

    '&:focus + label': {
      top: -25,
      pointerEvents: 'none',
    },

    '&:valid + label': {
      pointerEvents: 'none',
    },
  },
})

export const ImageContainer = styled('div', {
  height: '100%',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
  opacity: 0.8,
  backgroundImage: 'radial-gradient(#000dff 1.5px, #ffffff 1.5px)',
  backgroundSize: '30px 30px',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundImage: 'url("https://i.imgur.com/OeloDl2.jpg")',
    backgroundSize: 'cover',
    color: '#FFF',
    padding: '10px',
  },
})

export const FormFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',

  span: {
    color: '#807AFF',
    fontWeight: 500,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
