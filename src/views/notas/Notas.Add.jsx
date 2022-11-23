import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { CreateNotas } from '../../services/Consumo.js'
export const NotasAdd = () => {
  const [extra, setExtra] = useState('')

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const handleReset = () => {
    setExtra('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (extra === '') {
      setOpen(true)
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => setOpen(false), 3000)
      return
    }
    const data = {
      Fecha: new Date(),
      Extra: extra
    }

    try {
      const response = await CreateNotas(data)
      if (response) {
        setOpen(true)
        setMessage('Se ha enviado correctamente')
        handleReset()
        setTimeout(() => setOpen(false), 3000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangedAll = (e) => {
    setExtra(e.target.value)
  }

  const styles = {
    marginBottom: '1.3rem'
  }

  return (
    <>
      <Typography fontFamily={'sans-serif'} mt={3} mb={4} variant="h4" align="center">
        Agregar Notas
      </Typography>
      <div style={{
        marginBottom: '5rem'
      }}>
        <form onSubmit={handleSubmit} >
          <Grid container sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Grid item xs={12} sm={6} >
              <TextField
                fullWidth
                sx={styles}
                id="extra"
                name="extra"
                label="Extra"
                type="text"
                value={extra}
                onChange={handleChangedAll}
              />
              <Grid container sx={{
                marginTop: '1.3rem',
                justifyContent: 'space-around'
              }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Guardar
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#EEEEEE',
                    color: '#000'
                  }}
                  onClick={handleReset}
                >
                  Limpiar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={open}
          message={message}
        />
      </div>
    </>
  )
}
