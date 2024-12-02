import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdminPage from '../pages/AdminPage'

export default function AppRouter() {
  return (
    <div>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    </div>
  )
}
