import { Routes, Route } from 'react-router-dom'
//* Views
import { Home } from '../views/Home'
import { Error } from '../views/Error'
import { ProvedoresVer } from '../views/proveedores/Proveedores.Ver'

import { MaterialesVer } from '../views/materiales/Materiales.Ver'
import { NotasVer } from '../views/notas/Notas.Ver'
import { ObrasVer } from '../views/obras/Obras.Ver'
import { NotasDetailsVer } from '../views/notasDetails/NotasDetails.Ver'
import { NotasDetailsAdd } from '../views/notasDetails/NotasDetails.Add'
import { MaterialesAdd } from '../views/materiales/Materiales.Add'
import { ProveedoresAdd } from '../views/proveedores/Proveedores.Add'
import { NotasAdd } from '../views/notas/Notas.Add'
import { ObrasAdd } from '../views/obras/Obras.add'
import { NotasFiltro } from '../views/notas/Notas.Filtro'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/provedores" element={<ProvedoresVer />} />
      <Route path="/provedores/add" element={<ProveedoresAdd />} />
      <Route path="/materiales" element={<MaterialesVer />} />
      <Route path="/materiales/add" element={<MaterialesAdd />} />
      <Route path="/obras" element={<ObrasVer />} />
      <Route path="/obras/add" element={<ObrasAdd />} />
      <Route path="/notas" element={<NotasVer />} />
      <Route path="/notas/add" element={<NotasAdd />} />
      <Route path="/notas/filter" element={<NotasFiltro />} />
      <Route path="/notas/details" element={<NotasDetailsVer />} />
      <Route path="/notas/details/add" element={<NotasDetailsAdd />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
