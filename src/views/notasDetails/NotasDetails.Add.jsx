import {
  Typography,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField
} from '@mui/material'

import { useEffect, useState } from 'react'
import {
  GetObras,
  GetProveedores,
  GetMateriales,
  GetNotas,
  AdDetalleNota
} from '../../services/Consumo.js'

export const NotasDetailsAdd = () => {
  const [obra, setObra] = useState('')
  const [obras, setObras] = useState([])

  const [proveedor, setProveedor] = useState('')
  const [proveedores, setProveedores] = useState([])

  const [material, setMaterial] = useState('')
  const [materiales, setMateriales] = useState([])

  const [nota, setNota] = useState('')
  const [notas, setNotas] = useState([])

  const [cantidad, setCantidad] = useState(0)
  const [precioUnitario, setPrecioUnitario] = useState(0)
  const [extra, setExtra] = useState('')

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const ObtenerObras = async () => {
      const obres = await GetObras()
      setObras(obres)
    }
    ObtenerObras()
  }, [])

  useEffect(() => {
    const ObtenerProveedores = async () => {
      const prove = await GetProveedores()
      setProveedores(prove)
    }
    ObtenerProveedores()
  }, [])

  useEffect(() => {
    const ObtenerMateriales = async () => {
      const mat = await GetMateriales()
      setMateriales(mat)
    }
    ObtenerMateriales()
  }, [])

  useEffect(() => {
    const ObtenerNotas = async () => {
      const not = await GetNotas()
      setNotas(not)
    }
    ObtenerNotas()
  }, [])

  const handleReset = () => {
    setObra('')
    setProveedor('')
    setMaterial('')
    setNota('')
    setCantidad(0)
    setPrecioUnitario(0)
    setExtra('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (obra === '' || proveedor === '' || material === '' || nota === '' || cantidad === 0 || precioUnitario === 0) {
      setOpen(true)
      setMessage('Todos los campos son obligatorios')
      setTimeout(() => setOpen(false), 3000)
      return
    }
    const data = {
      Obra: obra,
      Prove: proveedor,
      Material: material,
      Nota: nota,
      Cantidad: cantidad,
      PrecioUnitario: precioUnitario,
      Extra: extra
    }
    const response = await AdDetalleNota(data)
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
      case 'Obra':
        setObra(value)
        break
      case 'Prove':
        setProveedor(value)
        break
      case 'Material':
        setMaterial(value)
        break
      case 'Nota':
        setNota(value)
        break
      case 'Cantidad':
        setCantidad(value)
        break
      case 'PrecioUnitario':
        setPrecioUnitario(value)
        break
      case 'Extra':
        setExtra(value)
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
        Agregar Nota
      </Typography>
      {/* <FormularioNotaDetail /> */}
      <form onSubmit={handleSubmit} >
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6} >
            <FormControl fullWidth sx={styles}>
              <InputLabel id="Obrasl">Seleccione una obra</InputLabel>
              <Select
                labelId="Obrasl"
                id="obrasSelect"
                value={obra}
                name="Obra"
                label="Seleccione una obra"
                onChange={handleChangedAll}
              >
                {obras.map((obra) => (
                  <MenuItem key={obra._id} value={obra._id}>
                    {obra.Nombre_Obra}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles}>
              <InputLabel id="proveedor">Seleccione una Proveedor</InputLabel>
              <Select
                labelId="proveedor"
                id="proveedorSelect"
                value={proveedor}
                name="Prove"
                label="Seleccione una Proveedor"
                onChange={handleChangedAll}
              >
                {
                  proveedores.map((proveedor) => (
                    <MenuItem key={proveedor._id} value={proveedor._id}>
                      {proveedor.RazonSoc}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles}>
              <InputLabel id="material">Seleccione un Material</InputLabel>
              <Select
                labelId="matrial"
                id="MaterialSelect"
                value={material}
                name="Material"
                label="Seleccione un Material"
                onChange={handleChangedAll}
              >
                {
                  materiales.map((material) => (
                    <MenuItem key={material._id} value={material._id}>
                      {material.Nombre_Mat}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl fullWidth >
              <InputLabel id="nota">Seleccione un Nota</InputLabel>
              <Select
                labelId="nota"
                id="NotaSelect"
                value={nota}
                label="Seleccione un Nota"
                name="Nota"
                onChange={handleChangedAll}
              >
                {
                  notas.map((nota) => (
                    <MenuItem key={nota._id} value={nota._id}>
                      {`${nota?.Extra} ${nota.Fecha}`}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              sx={styles}
              id="Cantidad"
              name="Cantidad"
              label="Cantidad"
              type="number"
              value={cantidad}
              onChange={handleChangedAll}
            />
            <TextField
              fullWidth
              sx={styles}
              id="PrecioUnitario"
              name="PrecioUnitario"
              label="Precio Unitario"
              type="number"
              value={precioUnitario}
              onChange={handleChangedAll}
            />
            <TextField
              fullWidth
              sx={styles}
              id="Extra"
              name="Extra"
              label="Extra"
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
      <Typography fontFamily={'sans-serif'} mt={3} mb={8} variant="h5" align="center">
        JavaScript es el mejor lenguaje de programación.
      </Typography>
    </>
  )
}
