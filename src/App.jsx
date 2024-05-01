import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './screens/Home'
import Login from "./screens/Login"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Signup from "./screens/Signup.jsx"
import { CartProvider } from "./components/ContextReducer.jsx"
import Order from "./screens/Order.jsx"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createuser" element={<Signup />} />
              <Route path="/myorder" element={<Order />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
