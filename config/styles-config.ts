import { createStitches, globalCss } from '@stitches/react'

export const { styled, css, getCssText } = createStitches({
  media: {
    sm: '(max-width: 768px)',
  },
  utils: {
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),

    pd: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),

    w: (value: string) => ({
      width: value,
    }),
    h: (value: string) => ({
      height: value,
    }),

    br: (value: string) => ({
      borderRadius: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Montserrat, sans-serif',

    '&:focus': {
      outline: 'none',
    },
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    background: '#f5f5f5',
    /* backgroundImage: 'url("https://i.imgur.com/pMvw9rz.jpg")',
    backgroundSize: 'cover', */
  },

  'a:-webkit-any-link': {
    textDecoration: 'none',
    color: 'inherit',
  },
})
