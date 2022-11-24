
import { GetMateriales } from '../../services/Consumo.js'
import { DataTable } from '../../components/DataTable'
import { useEffect, useState } from 'react'
import { DescargarExcel } from '../../components/DescargarExcel.jsx'

export const MaterialesVer = () => {
  const [materiales, setMateriales] = useState([])
  const [Heads] = useState(
    [
      'Nombre Material',
      'Marca',
      'Cantegoria',
      'Unidad de Medida'
    ]
  )

  useEffect(() => {
    const ObtenerProveedores = async () => {
      const material = await GetMateriales()
      setMateriales(material)
    }
    ObtenerProveedores()
  }, [])

  return (<>
    <DataTable Heads={Heads} Data={materiales} Title={'Materiales'} />
    <DescargarExcel reporte='materiales' />
  </>
  )
}
