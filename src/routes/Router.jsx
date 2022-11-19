import { Routes, Route } from 'react-router-dom'
//* Views
import { Home } from '../views/Home'
import { Error } from '../views/Error'
import { ProvedoresVer } from '../views/proveedores/Proveedores.Ver'
import { MaterialesVer } from '../views/materiales/Materiales.Ver'
import { NotasVer } from '../views/notas/Notas.Ver'
import { ObrasVer } from '../views/obras/obras.Ver'
import { NotasDetailsVer } from '../views/notasDetails/NotasDetails.Ver'
import { NotasDetailsAdd } from '../views/notasDetails/NotasDetails.Add'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/provedores" element={<ProvedoresVer />} />
      <Route path="/materiales" element={<MaterialesVer />} />
      <Route path="/obras" element={<ObrasVer />} />
      <Route path="/notas" element={<NotasVer />} />
      <Route path="/notas/details" element={<NotasDetailsVer />} />
      <Route path="/notas/details/add" element={<NotasDetailsAdd />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
