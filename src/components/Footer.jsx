import { Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

export const Footer = () => {
  return (
    <Paper

      sx={{
        height: '50px',
        backgroundColor: '#3f51b5',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}
    >
      <Container>
        <Typography variant="body2" align="center">
          Construcciones y proyectos
        </Typography>
      </Container>
    </Paper>
  )
}
