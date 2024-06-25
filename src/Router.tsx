import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router