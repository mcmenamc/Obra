import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import {

  CreateMaterial
} from '../../services/Consumo.js'

export const MaterialesAdd = () => {
  const [material, setMaterial] = useState('')
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [unidadMedida, setUnidadMedida] = useState('')

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleReset = () => {
    setMaterial('')
    setMarca('')
    setCategoria('')
    setUnidadMedida('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (material === '' || marca === '' || categoria === '' || unidadMedida === '') {
      setOpen(true)
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => setOpen(false), 3000)
      return
    }
    const data = {
      Nombre: material,
      Marca: marca,
      Categoria: categoria,
      UnidadMedida: unidadMedida
    }

    const response = await CreateMaterial(data)

    if (response) {
      setOpen(true)
      setMessage('Se ha enviado correctamente')
      handleReset()
      setTimeout(() => setOpen(false), 3000)
    }
  }

  const handleChangedAll = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'material':
        setMaterial(value)
        break
      case 'marca':
        setMarca(value)
        break
      case 'categoria':
        setCategoria(value)
        break
      case 'unidadMedida':
        setUnidadMedida(value)
        break
    }
  }

  const styles = {
    marginBottom: '1.3rem'
  }

  return (
    <>

      <Typography fontFamily={'sans-serif'} mt={3} mb={4} variant="h4" align="center">
        Agregar Mateteriales
      </Typography>
      <div style={{
        marginBottom: '5rem'
      }}>
        <form onSubmit={handleSubmit} >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} >
              <TextField
                fullWidth
                sx={styles}
                id="material"
                name="material"
                label="Nombre del Material"
                type="text"
                value={material}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="marca"
                name="marca"
                label="Marca"
                type="text"
                value={marca}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                id="categoria"
                name="categoria"
                label="Categoria"
                type="text"
                value={categoria}
                onChange={handleChangedAll}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                sx={styles}
                id="unidadMedida"
                name="unidadMedida"
                label="Unitidad de Medida"
                type="text"
                value={unidadMedida}
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
