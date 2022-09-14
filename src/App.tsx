import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from 'routes'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => (
          <Route path={route.link} key={route.id} element={<route.element />} />
        ))}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App
