import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from 'routes'

const RoutesProvider = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.link} key={route.id} element={<route.element />} />
      ))}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default RoutesProvider
