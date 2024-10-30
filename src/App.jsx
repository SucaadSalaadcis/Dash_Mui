import { Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp"

import Agents from "./pages/Agents"
import Sidenav from "./components/Sidenav"
import Dashboard from "./components/Dashboard"
import Customers from "./pages/Customers"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Users from "./pages/Users"
import SignIn from "./components/SignIn"

function App() {
  return (
    <>
      <Sidenav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>

      </Sidenav>
      {/* <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}
    </>
  )
}

export default App