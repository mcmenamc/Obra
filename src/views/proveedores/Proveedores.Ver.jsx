
import { GetProveedores } from '../../services/Consumo.js'
import { DataTable } from '../../components/DataTable'
import { useEffect, useState } from 'react'
import { DescargarExcel } from '../../components/DescargarExcel.jsx'

export const ProvedoresVer = () => {
  const [proveedores, setProveedores] = useState([])
  const [Heads] = useState(
    [
      'Razon Social',
      'Agente',
      'Direccion',
      'Telefono',
      'Correo'
    ]
  )

  useEffect(() => {
    const ObtenerProveedores = async () => {
      const proveedores = await GetProveedores()
      setProveedores(proveedores)
    }
    ObtenerProveedores()
  }, [])

  return (
    <>
    <DataTable Heads={Heads} Data={proveedores} Title={'Proveedores'} />
      <DescargarExcel reporte='proveedores' />
    </>
  )
}
