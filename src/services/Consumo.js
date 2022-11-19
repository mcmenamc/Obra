import axios from 'axios'
export const RutaApi = 'https://api-obras.fly.dev/api'

export const GetMateriales = async () => {
  const { data } = await axios.get(`${RutaApi}/materiales`)
  return data
}

export const GetProveedores = async () => {
  const { data } = await axios.get(`${RutaApi}/proveedores`)
  return data
}

export const GetNotas = async () => {
  const { data } = await axios.get(`${RutaApi}/notas`)
  return data
}

export const GetObras = async () => {
  const { data } = await axios.get(`${RutaApi}/obras`)
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
  const resp = await axios.delete(`${RutaApi}/detallenotas/${id}`)
  return resp.data
}
