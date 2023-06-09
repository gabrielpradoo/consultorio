// src/App.tsx
import { BrowserRouter, Route, Routes, Link as RouterLink } from "react-router-dom";
import CadastrarMedicos from "./components/CadastrarMedicos";
import AgendarConsultas from "./components/AgendarConsultas";
import ListarConsultas from "./components/ListarConsultas";
import { Box, Button } from "@mui/material";
import { ConsultasProvider } from "./context/ConsultasContext";

/**
 * 
 * Nosso objetivo é criar uma aplicação com 3 funcionalidades:
 * - cadastrar médicos 
 *    /cadastrar
 * - Agendar Consultas
 *    /agendar
 * - Listar consultas
 *    /listar
 */
function App() {
  /**
   * A gente usa uma biblioteca do react, chamado Router DOM
   * direciona os caminhos para os componentes
   */
  return (
    <ConsultasProvider>
      <BrowserRouter>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh', textAlign: 'center' }}>
          <nav>
            <Button
              component={RouterLink}
              to="/cadastrar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Registrar Médico
            </Button>
            <Button
              component={RouterLink}
              to="/agendar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Agendar Consultas
            </Button>
            <Button
              component={RouterLink}
              to="/listar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Listar Consultas
            </Button>
          </nav>
          <Routes>
            <Route path="/cadastrar" element={<CadastrarMedicos />} />
            <Route path="/agendar" element={<AgendarConsultas />} />
            <Route path="/listar" element={<ListarConsultas />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ConsultasProvider>
  );
}

export default App;


// yarn create vite consultorio --template react-ts

// yarn add react-router-dom @types/react-router-dom