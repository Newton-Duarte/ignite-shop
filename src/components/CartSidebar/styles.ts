import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'absolute',
  right: 0,
  flexDirection: 'column',
  flex: 1,
  width: '30rem',
  height: '100dvh',
  padding: '4.5rem 3rem 3rem',
  background: '$gray800',
  marginBottom: '-3rem',
  zIndex: 10,

  h4: {
    fontSize: '$lg',
    color: '$gray100',
    fontWeight: 'bold',
  },

  footer: {
    width: '100%',
    marginTop: 'auto',
  },

  variants: {
    variant: {
      open: {
        display: 'flex',
      },
      closed: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'closed',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: 24,
  right: 24,
  border: 'none',
  background: 'transparent',
  width: '1.5rem',
  height: '1.5rem',
  cursor: 'pointer',
  svg: {
    color: '$gray200',
  },
})

export const Products = styled('ul', {
  listStyle: 'none',
  marginTop: '2rem',
  maxHeight: '35rem',
  overflow: 'auto',

  /* width */
  '&::-webkit-scrollbar': {
    width: '6px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: '$gray700',
  },

  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: '$gray100',
  },

  /* Handle on hover */
  '&::-webkit-scrollbar-thumb:hover': {
    background: '$gray200',
  },
})

export const Product = styled('li', {
  display: 'flex',
  gap: '1.25rem',

  '& + &': {
    marginTop: '1.5rem',
  },

  '> div': {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h6: {
      fontSize: '$md',
      fontWeight: 'normal',
      color: '$gray300',
    },

    span: {
      display: 'block',
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      background: 'transparent',
      border: 'none',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '$green500',
      cursor: 'pointer',

      '&:not(:disabled):hover': {
        color: '$green300',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  width: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',

  '> img': {
    objectFit: 'cover',
  },
})

export const FinalizeButton = styled('button', {
  width: '100%',
  marginTop: '3.5rem',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const Quantity = styled('div', {
  color: '$gray100',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',

  p: {
    '&:last-of-type': {
      fontSize: '$md',
    },
  },
})

export const Total = styled('div', {
  color: '$gray100',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$md',
  fontWeight: 'bold',
  marginTop: '0.5rem',

  p: {
    '&:last-of-type': {
      fontSize: '$xl',
    },
  },
})

export const EmptyCart = styled('p', {
  textAlign: 'center',
  color: '$gray200',
  marginTop: '20rem',
})
