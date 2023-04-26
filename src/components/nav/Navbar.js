import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainHeader from "./mainHeader"
import Home from "./Home"
import Requisitions from "./Requisitions"
import Submissions from "./Submissions"
import Candidates from "./Candidates"
import Error from './Error'

const Navbar = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={< MainHeader />} >
          <Route index element={<Home />} />
          <Route path="/requisitions" element={<Requisitions />} />
          <Route path="/submission" element={<Submissions />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default Navbar