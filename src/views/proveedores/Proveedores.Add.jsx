import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import {
  CreateProveedor
} from '../../services/Consumo.js'

export const ProveedoresAdd = () => {
  const [razonSocial, setRazonSocial] = useState('')
  const [agente, setAgente] = useState('')
  const [direccion, setdireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [tipoMateria, setTipoMateria] = useState('')

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleReset = () => {
    setRazonSocial('')
    setAgente('')
    setdireccion('')
    setTelefono('')
    setTipoMateria('')
    setCorreo('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (razonSocial === '' || agente === '' || direccion === '' || telefono === '' || correo === '' || tipoMateria === '') {
      setOpen(true)
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => setOpen(false), 3000)
      return
    }

    const data = {
      RazonSoc: razonSocial,
      Agente: agente,
      Direccion: direccion,
      Telefono: telefono,
      Correo: correo,
      TipoMaterial: tipoMateria
    }

    try {
      const response = await CreateProveedor(data)
      if (response) {
        setOpen(true)
        setMessage('Se ha enviado correctamente')
        handleReset()
        setTimeout(() => setOpen(false), 3000)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangedAll = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'razonSocial':
        setRazonSocial(value)
        break
      case 'agente':
        setAgente(value)
        break
      case 'direccion':
        setdireccion(value)
        break
      case 'telefono':
        setTelefono(value)
        break
      case 'correo':
        setCorreo(value)
        break
      case 'tipoMateria':
        setTipoMateria(value)
        break
      default:
        break
    }
  }

  const styles = {
    marginBottom: '1.3rem'
  }

  return (
    <>

      <Typography fontFamily={'sans-serif'} mt={3} mb={4} variant="h4" align="center">
        Agregar Proveedor
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
                id="razonSocial"
                name="razonSocial"
                label="Razón Social"
                type="text"
                value={razonSocial}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="agente"
                name="agente"
                label="Agente"
                type="text"
                value={agente}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                id="direccion"
                name="direccion"
                label="Dirección"
                type="text"
                value={direccion}
                onChange={handleChangedAll}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                sx={styles}
                id="telefono"
                name="telefono"
                label="Teléfono"
                type="text"
                value={telefono}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="correo"
                name="correo"
                label="Correo"
                type="text"
                value={correo}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="tipoMateria"
                name="tipoMateria"
                label="tipoMateria"
                type="text"
                value={tipoMateria}
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
