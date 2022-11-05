import { Routes, Route } from "react-router-dom";

import { useAllAdvocates } from "./hooks/useAllAdvocates";
import Advocates from "./pages/advocates/Advocates";
import Advocate from "./pages/advocates/Advocate";
import Home from "./pages/home/Home";
import Companies from "./pages/companies/Companies";
import Company from "./pages/companies/Company";
import Navbar from "./components/Navbar";

function App() {
  // console.log(advocates && advocates);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/advocates' element={<Advocates />} />
        <Route
          path='/advocates/:id'
          element={<Advocate />}
        />
        <Route path='/companies' element={<Companies />} />
        <Route
          path='/companies/:id'
          element={<Company />}
        />
      </Routes>
    </div>
  );
}

export default App;
