import React from 'react'
import Home from './pages/Home'
import AddNoteForm from './pages/AddNoteForm'
import { Route , Routes , BrowserRouter} from "react-router"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnote" element={<AddNoteForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App