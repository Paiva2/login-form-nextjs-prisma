import { keyframes, styled } from '@stitches/react'

export const LoadingWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  padding: '50px',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 6px',
})

const spinnerFrames = keyframes({
  '0%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(0deg)',
  },

  '100%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(360deg)',
  },
})

export const Spin = styled('div', {
  '&::before': {
    animation: `1.5s linear infinite ${spinnerFrames}`,
    animationPlayState: 'inherit',
    border: 'solid 5px #cfd0d1',
    borderBottomColor: '#4651E5',
    borderRadius: '50%',
    content: '',
    height: '2.8125rem',
    width: '2.8125rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%)',
    willChange: 'transform',
  },
})
