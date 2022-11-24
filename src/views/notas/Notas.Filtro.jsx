import { useEffect, useState } from 'react'
import { GetDetalleNotaByDate, GetObras } from '../../services/Consumo'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material'
import { DataTable } from '../../components/DataTable'

export const NotasFiltro = () => {
  const [obra, setObra] = useState('')
  const [obras, setObras] = useState([])
  const [data, setData] = useState([])
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [fechaFin, setFechaFin] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const Heads = ['Fecha', 'Extra']

  useEffect(() => {
    const ObtenerObras = async () => {
      const obres = await GetObras()
      setObras(obres)
    }
    ObtenerObras()
  }, [])

  const styles = {
    marginBottom: '1.3rem'
  }

  const handleReset = () => {
    setObra('')
    setFechaInicio(new Date())
    setFechaFin(new Date())
    setData([])
    setLoading(false)
  }

  const ObtenerNotasByDate = async () => {
    if (fechaInicio > fechaFin) {
      setOpen(true)
      setMessage('La fecha de inicio no puede ser mayor a la fecha de fin')
      setTimeout(() => setOpen(false), 3000)
      return
    }

    if (obra === '') {
      setOpen(true)
      setMessage('Debe seleccionar una obra')
      setTimeout(() => setOpen(false), 3000)
      return
    }

    try {
      const inicio = fechaInicio.toISOString().split('T')[0]
      const fin = fechaFin.toISOString().split('T')[0]
      const response = await GetDetalleNotaByDate(inicio, fin, obra)

      if (response.length === 0) {
        setOpen(true)
        setMessage('No se encontraron notas en el rango de fechas seleccionado')
        setTimeout(() => setOpen(false), 3000)
        return
      }
      const data = response.map((item) => {
        return {
          _id: item.Nota._id,
          fecha: item.Nota.Fecha,
          extra: item.Nota.Extra
        }
      })
      setData(data)
      setLoading(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{
      marginBottom: '5rem'
    }}>

      <Typography fontFamily={'sans-serif'} mt={3} mb={4} variant="h4" align="center">
        Filtro de Notas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha de Inicio"
              value={fechaInicio}
              sx={styles}
              onChange={(newValue) => {
                setFechaInicio(newValue)
              }}
              renderInput={(params) => <TextField fullWidth sx={styles} {...params} />}
            />
            <DatePicker
              label="Fecha de Finalización"
              value={fechaFin}
              onChange={(newValue) => {
                setFechaFin(newValue)
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} lg={6} >
          <FormControl fullWidth sx={styles}>
            <InputLabel id="Obrasl">Seleccione una obra</InputLabel>
            <Select
              labelId="Obrasl"
              id="obrasSelect"
              value={obra}
              name="Obra"
              label="Seleccione una obra"
              onChange={
                (e) => setObra(e.target.value)
              }
            >
              {obras.map((obra) => (
                <MenuItem key={obra._id} value={obra._id}>
                  {obra.Nombre_Obra}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
          <Grid container sx={{
            marginTop: '1.3rem',
            justifyContent: 'space-around'
          }}>
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
            <Button
              onClick={ObtenerNotasByDate}
              variant="contained"
              color="primary"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {
        loading ? <DataTable Title='Notas encontradas' Heads={Heads} Data={data} /> : <></>
      }
      <Snackbar
        open={open}
        message={message} />
    </div>
  )
}
