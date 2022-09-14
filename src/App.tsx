import { createTheme, ThemeProvider } from '@mui/material'
import RoutesProvider from 'RoutesProvider'
import './App.css'

function App() {
  const theme = createTheme({})

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RoutesProvider />
      </div>
    </ThemeProvider>
  )
}

export default App
