module.exports = {
  styles: {
    Heading: {
      heading1: {
        display: 'block',
        position: 'relative',
        paddingBottom: '0.75rem',
        marginBottom: '0.75rem',
        fontWeight: 700,
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '6rem',
          height: '4px',
          backgroundColor: '#00aefc',
          borderRadius: '4px'
        },
        '& > a': {
          fontWeight: '700 !important'
        }
      }
    },
    ReactComponent: {
      tabs: {
        backgroundColor: '#ebf1f3',
        padding: `0.5rem 1rem`,
        overflow: 'auto'
      },
      tabButtons: {
        marginBottom: 0
      }
    },
    TabButton: {
      button: {
        width: '100%'
      },
      isActive: {
        border: 0
      }
    },
    Table: {
      table: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        minWidth: '600px'
      }
    }
  },
  theme: {
    color: {
      codeBackground: '#ebf1f3'
    }
  }
}
