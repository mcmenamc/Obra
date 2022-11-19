import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Toolbar } from '@mui/material'

export const DataTable = props => {
  // eslint-disable-next-line react/prop-types
  const { Heads, Data, Title } = props
  // eslint-disable-next-line react/prop-types
  let keys = Data.length > 0 ? Object.keys(Data[0]) : []
  keys = keys.slice(1)
  return (
    <Paper sx={{
      marginTop: 6,
      width: '100%'
    }} >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3f51b5',
          color: '#fff'
        }}
      >
        <h2>{Title}</h2>
      </Toolbar>
      <TableContainer
        component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead
          >
            <TableRow>
              <TableCell>Identificador</TableCell>
              {
                // eslint-disable-next-line react/prop-types
                Heads.map((head, i) => (
                  <TableCell key={i} align="right">{head}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // eslint-disable-next-line react/prop-types
              Data.map(row => (
                <TableRow
                  key={row._id}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  {
                    keys.map(key => (
                      <TableCell key={key} align="right">{row[key]}</TableCell>
                    ))
                  }
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
