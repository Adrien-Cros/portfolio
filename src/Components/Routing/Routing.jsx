import Home from '../../Pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Routing
