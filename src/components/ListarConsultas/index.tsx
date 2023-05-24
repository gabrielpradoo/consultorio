import { Box, Card, Container } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext } from "react";
import { ConsultasContext } from "../../context/ConsultasContext";


export default function ListarConsultas() {
  const { consultas } = useContext(ConsultasContext)
//   data
// nomePaciente
// numeroTel
// emailDoutor
// time

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'nomePaciente',
      headerName: 'Nome do Paciente',
      width: 150,
    },
    {
      field: 'numeroTel',
      headerName: 'Número Celular',
      width: 130,
    },
    {
      field: 'emailDoutor',
      headerName: 'Email do Doutor',
      width: 200,
    },
    {
      field: 'data',
      headerName: 'Data/Hora',
      width: 200,
      valueFormatter: ({value}) => new Date(value as string).toLocaleString(
        'pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}
      )
    },
  ];

  

  return (
    <Container maxWidth="sm">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card elevation={3} sx={{ padding: 4, borderRadius: 2, minWidth: '800px' }}>
      <DataGrid
        rows={consultas || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Card>
    </Box>
  </Container>
  )
}
