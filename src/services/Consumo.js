import axios from 'axios'
export const RutaApi = 'https://api-obras.fly.dev/api'

export const GetMateriales = async () => {
  const { data } = await axios.get(`${RutaApi}/materiales`)
  return data
}

export const CreateMaterial = async (material) => {
  const { data } = await axios.post(`${RutaApi}/materiales`, material)
  return data
}

export const GetProveedores = async () => {
  const { data } = await axios.get(`${RutaApi}/proveedores`)
  return data
}
export const CreateProveedor = async (proveedor) => {
  const { data } = await axios.post(`${RutaApi}/proveedores`, proveedor)
  return data
}

export const GetNotas = async () => {
  const { data } = await axios.get(`${RutaApi}/notas`)
  return data
}

export const CreateNotas = async (nota) => {
  const { data } = await axios.post(`${RutaApi}/notas`, nota)
  return data
}
export const GetObras = async () => {
  const { data } = await axios.get(`${RutaApi}/obras`)
  return data
}

export const CreateObras = async (obra) => {
  const { data } = await axios.post(`${RutaApi}/obras`, obra)
  return data
}

export const GetDetalleNotas = async () => {
  const { data } = await axios.get(`${RutaApi}/detallenotas`)
  return data
}

export const AdDetalleNota = async data => {
  const resp = await axios.post(`${RutaApi}/detallenotas`, data)
  return resp.data
}

export const DeleteDetalleNota = async id => {
  const { data } = await axios.delete(`${RutaApi}/detallenotas/${id}`)
  return data
}

export const GetDetalleNotaByDate = async (Inicio, Fin, idOba) => {
  const { data } = await axios.get(`${RutaApi}/detallenotas/date/${Inicio}/${Fin}/${idOba}`)
  return data
}

export const GenerateExcel = async (collection) => {
  const { data } = await axios({
    url: `${RutaApi}/${collection}/excel`,
    method: 'POST',
    responseType: 'blob'
  })
  return data
}
