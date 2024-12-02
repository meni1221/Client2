import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

export default function AppRouter() {
  return (
    <div>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </div>
  )
}
