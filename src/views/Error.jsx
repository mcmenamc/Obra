import { Box } from '@mui/system'

export const Error = () => {
  return (
    <Box sx={
      {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <h1>Error 404</h1>
    </Box>
  )
}
