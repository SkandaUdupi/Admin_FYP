import "./App.css";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={1} sx={{ height: "100vh" }}>
        <Sidebar />
        <Main />
      </Stack>
    </Box>
  );
}

export default App;
