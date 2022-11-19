import { Typography } from '@mui/material'
import { FormularioNotaDetail } from '../../components/FormularioNotaDetail'

export const NotasDetailsAdd = () => {
  return (
    <>
      <Typography fontFamily={'sans-serif'} mt={3} mb={4} variant="h4" align="center">
        Agregar Nota
      </Typography>
      <FormularioNotaDetail />
      <Typography fontFamily={'sans-serif'} mt={3} mb={8} variant="h5" align="center">
        JavaScript es el mejor lenguaje de programación.
      </Typography>
    </>
  )
}
