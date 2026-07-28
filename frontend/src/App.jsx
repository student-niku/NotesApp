import React from 'react'
import Home from './pages/Home'
import AddNoteForm from './pages/AddNoteForm'
import { Route , Routes , BrowserRouter} from "react-router"
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './components/protecter/ProtectedRoute'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home></Home>} />
        <Route path="/addnote" element={
          <ProtectedRoute>
            <AddNoteForm/>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App