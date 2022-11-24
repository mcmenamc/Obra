import { Download } from '@mui/icons-material'
import { Button } from '@mui/material'
import { GenerateExcel } from '../services/Consumo'

export const DescargarExcel = (prop) => {
  const { reporte } = prop

  const handleExcel = async () => {
    const data = await GenerateExcel(reporte)
    const href = URL.createObjectURL(data)
    const link = document.createElement('a')
    link.href = href
    link.download = 'Reporte-' + new Date().toLocaleDateString() + '.xlsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Button variant="contained"
        sx={{
          marginTop: '1.3rem'
        }}
        onClick={handleExcel}
        endIcon={<Download />}>
        Descargar reporte
      </Button>
    </>
  )
}
