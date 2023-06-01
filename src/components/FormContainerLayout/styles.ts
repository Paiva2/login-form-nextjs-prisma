import { styled } from '@/config/styles-config'

export const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '900px',
  background: '#FFF',
  border: '1px solid red',
  height: '700px',
  justifyContent: 'center',
  pd: '15px',
})

export const FormWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '55%',
  height: '100%',

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    border: '1px solid red',
    gap: '15px',

    label: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export const ImageContainer = styled('div', {
  height: '100%',
  width: '45%',
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
    backgroundImage: 'url("https://i.imgur.com/OeloDl2.png")',
    backgroundSize: 'cover',
    color: '#FFF',
  },
})
