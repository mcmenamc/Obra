
import { GetObras } from '../../services/Consumo.js'
import { DataTable } from '../../components/DataTable'
import { useEffect, useState } from 'react'
import { DescargarExcel } from '../../components/DescargarExcel.jsx'

export const ObrasVer = () => {
  const [obras, setObras] = useState([])

  const [Heads] = useState(
    [
      'Nombre Obra',
      'Direcciión',
      'Fecha Inicio',
      'Fecha Fin',
      'Dueño',
      'Responsable',
      'Telefono Responsable',
      'Correo Responsable'
    ]
  )

  useEffect(() => {
    const ObtenerObras = async () => {
      const obres = await GetObras()
      setObras(obres)
    }
    ObtenerObras()
  }, [])

  return (
    <>
      <DataTable Heads={Heads} Data={obras} Title={'Obras'} />
      <DescargarExcel reporte='obras' />
    </>

  )
}
