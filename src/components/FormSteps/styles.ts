import { styled } from '@/config/styles-config'

export const Steps = styled('div', {
  display: 'grid',
  gap: '10px',
})

export const Step = styled('div', {
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'gray',

  variants: {
    active: {
      true: {
        backgroundColor: 'black',
      },
    },
  },
})
