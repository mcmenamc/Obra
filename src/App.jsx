import './assets/css/App.css'
import { Outlet } from 'react-router'
import { Router } from './routes/Router'
import { Container } from '@mui/material'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Router />
      </Container>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
