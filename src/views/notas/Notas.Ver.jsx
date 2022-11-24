
import { GetNotas } from '../../services/Consumo.js'
import { DataTable } from '../../components/DataTable'
import { useEffect, useState } from 'react'
import { DescargarExcel } from '../../components/DescargarExcel.jsx'

export const NotasVer = () => {
  const [notas, setNotas] = useState([])
  const [Heads] = useState(
    [
      'Fecha',
      'Extra'
    ]
  )

  useEffect(() => {
    const ObtenerProveedores = async () => {
      const notes = await GetNotas()
      setNotas(notes)
    }
    ObtenerProveedores()
  }, [])

  return (
    <>
      <DataTable Heads={Heads} Data={notas} Title={'Notas'} />
      <DescargarExcel reporte='notas' />
    </>
  )
}
