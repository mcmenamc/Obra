import { Box, Grid } from '@mui/material'
import Mern from '../assets/images/mern.png'

export const Home = () => {
  return (
    <Grid sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: {
        xs: '85vh',
        sm: '110vh',
        md: '90vh',
        lg: '95vh',
        xl: '85vh'
      }
    }}>
      <Box>
        <img
          src={Mern}
          alt="Mern"
          width="100%"
          height="100%"
          style={{
            objectFit: 'contain'
          }}
        />
        <h1 style={{
          textAlign: 'center'
        }}>
          Hecho por <a href="https://github.com/mcmenamc"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#3f51b5'
            }}
          >
            Jesús Antonio Mena
          </a>
        </h1>
      </Box>
    </Grid>
  )
}
