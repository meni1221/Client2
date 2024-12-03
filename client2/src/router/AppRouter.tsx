import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdminPage from '../pages/AdminPage'
import RegisterPage from '../pages/RegisterPage'

export default function AppRouter() {
  return (
    <div>
    <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    </div>
  )
}
