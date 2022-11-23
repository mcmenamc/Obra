import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { CreateObras } from '../../services/Consumo.js'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const ObrasAdd = () => {
  const [nombreObra, setNombreObra] = useState('')
  const [direccion, setDireccion] = useState('')
  const [responsable, setResponsable] = useState('')
  const [correoResponsable, setCorreoResponsable] = useState('')
  const [telefonoResponsable, setTelefonoResponsable] = useState('')
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [fechaFin, setFechaFin] = useState(new Date())
  const [dueno, setDueno] = useState('')

  const handleReset = () => {
    setNombreObra('')
    setDireccion('')
    setDueno('')
    setResponsable('')
    setCorreoResponsable('')
    setTelefonoResponsable('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (nombreObra === '' || direccion === '' || fechaInicio === '' || responsable === '' || dueno === '' || telefonoResponsable === '' || correoResponsable === '') {
      setOpen(true)
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => setOpen(false), 3000)
      return
    }
    const data = {
      NombreObra: nombreObra,
      Direccion: direccion,
      FechaInicio: fechaInicio,
      FechaFin: fechaFin,
      Dueno: dueno,
      Responsable: responsable,
      TelResp: telefonoResponsable,
      CorreoResp: correoResponsable
    }
    console.log(data)
    try {
      const response = await CreateObras(data)
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
    const { name, value } = e.target
    switch (name) {
      case 'nombreObra':
        setNombreObra(value)
        break
      case 'direccion':
        setDireccion(value)
        break
      case 'responsable':
        setResponsable(value)
        break
      case 'correoResponsable':
        setCorreoResponsable(value)
        break
      case 'dueno':
        setDueno(value)
        break
      case 'telefonoResponsable':
        setTelefonoResponsable(value)
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
        Agregar Obras
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
                id="nombreObra"
                name="nombreObra"
                label="Nombre de la Obra"
                type="text"
                value={nombreObra}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="direccion"
                name="direccion"
                label="Dirección"
                type="text"
                value={direccion}
                onChange={handleChangedAll}
              />
              <Grid container
                sx={styles}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Fecha de Inicio"
                    value={fechaInicio}
                    onChange={(newValue) => {
                      setFechaInicio(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="Fecha de Finalización"
                    value={fechaFin}
                    onChange={(newValue) => {
                      setFechaFin(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <TextField
                fullWidth
                sx={styles}
                id="dueno"
                name="dueno"
                label="Dueño"
                type="text"
                value={dueno}
                onChange={handleChangedAll}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                sx={styles}
                id="responsable"
                name="responsable"
                label="Responsable"
                type="text"
                value={responsable}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="telefonoResponsable"
                name="telefonoResponsable"
                label="Telefono del Responsable"
                type="number"
                value={telefonoResponsable}
                onChange={handleChangedAll}
              />
              <TextField
                fullWidth
                sx={styles}
                id="correoResponsable"
                name="correoResponsable"
                label="Correo del Responsable"
                type="email"
                value={correoResponsable}
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
