import { Route, Routes, HashRouter as Router, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import { categoryRoutes } from './pages/category/router'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        {categoryRoutes}
      </Routes>
    </Router>
  )
}

export default App
