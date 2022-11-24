import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Snackbar, Toolbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { GetDetalleNotas, DeleteDetalleNota } from '../../services/Consumo.js'
import { Delete } from '@mui/icons-material'
import { DescargarExcel } from '../../components/DescargarExcel.jsx'

export const NotasDetailsVer = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [Heads] = useState([
    'Obra',
    'Proveedor',
    'Material',
    'Nota',
    'Cantidad',
    'Precio Unitario',
    'Extra',
    'Acciones'
  ])

  const [NotasDetails, setNotasDetails] = useState([])

  const ObtenerNotasDetails = async () => {
    const notes = await GetDetalleNotas()
    setNotasDetails(notes)
  }

  useEffect(() => {
    ObtenerNotasDetails()
  }, [])

  const handleDelete = async (id) => {
    const borrado = await DeleteDetalleNota(id)
    if (borrado == null) {
      setOpen(true)
      setMessage('Error al borrar')
      setTimeout(() => setOpen(false), 3000)
      return
    }
    setOpen(true)
    setMessage('Borrado con exito')
    setTimeout(() => setOpen(false), 3000)
    setNotasDetails([])

    await ObtenerNotasDetails()
  }

  return (
    <>
      <Paper sx={{
        marginTop: 6,
        width: '100%',
        marginBottom: '1.3rem'
      }} >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3f51b5',
            color: '#fff'
          }}
        >
          <h2>Notas Detalles</h2>
        </Toolbar>
        <TableContainer
          component={Paper}>
          <Table sx={{ minWidth: 650 }} >
            <TableHead
            >
              <TableRow>
                {
                  Heads.map((head, i) => (
                    <TableCell key={i} align={
                      i !== 0 ? 'right' : 'left'
                    }>{head}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                NotasDetails.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.Obra.Nombre_Obra}</TableCell>
                    <TableCell align="right">{row.Prove.RazonSoc}</TableCell>
                    <TableCell align="right">{row.Material.Nombre_Mat}</TableCell>
                    <TableCell align="right">{row.Nota.Extra}</TableCell>
                    <TableCell align="right">{row.Cantidad}</TableCell>
                    <TableCell align="right">{row.PrecioUnitario}</TableCell>
                    <TableCell align="right">{row.Extra}</TableCell>
                    <TableCell align="right">
                      <Button color='error' onClick={
                        () => handleDelete(row._id)
                      }>
                        <Delete />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Snackbar
        open={open}
        message={message}
      />
      <DescargarExcel reporte='detallenotas' />
    </>
  )
}
