import { styled } from '@/config/styles-config'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  pd: '1.875rem',
  m: '0 auto',
  backgroundColor: '#FFFF',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
  justifyContent: 'center',
  br: '5px',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const SucessIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '7.5rem',
  h: '7.5rem',
  background: '#00B37E',
  borderRadius: '50%',
})

export const LogoutButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.625rem',
  fontWeight: 700,
  verticalAlign: 'middle',
  w: '12.5rem',
  h: '2.8125rem',
  br: '5px',
  border: 'none',
  background: '#E83C3C',
  color: '#FFF',
  cursor: 'pointer',
  fontSize: '.9375rem',
  transition: '.2s all ease-in-out',

  '&:hover': {
    background: '#E81414',
    mozTransform: 'scale(1.05)',
    webKitTransform: 'scale(1.05)',
    transform: 'scale(1.05)',
  },
})

export const GreetingsContainer = styled('div', {
  h2: {
    textAlign: 'center',
  },
})
