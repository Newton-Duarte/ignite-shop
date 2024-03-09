import { styled } from '@/styles'

export const Container = styled('button', {
  border: 'none',
  position: 'relative',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
        svg: {
          color: '$white',
        },
      },
      secondary: {
        backgroundColor: '$gray800',
        svg: {
          color: '$gray200',
        },
      },
    },
    size: {
      sm: {
        width: 32,
        height: 32,
        svg: {
          width: 16,
          height: 16,
        },
      },
      md: {
        width: 48,
        height: 48,
        svg: {
          width: 24,
          height: 24,
        },
      },
      lg: {
        width: 56,
        height: 56,
        svg: {
          width: 32,
          height: 32,
        },
      },
    },
  },

  '&.active': {
    svg: {
      color: '$gray300',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const Badge = styled('div', {
  position: 'absolute',
  width: 24,
  height: 24,
  borderRadius: 999,
  textAlign: 'center',
  padding: 4,
  fontSize: '$sm',
  top: -10,
  right: -10,
  backgroundColor: '$green500',
  border: '3px solid $gray900',
  color: '$white',
})
