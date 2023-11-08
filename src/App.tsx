import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Suspense, lazy} from "react";
import Loader from "./components/loader";


const Dashboard = lazy(() => import ("./pages/dashboard"));
const Products = lazy(() => import ("./pages/products"));
const Customers = lazy(() => import ("./pages/customers"));
const Transaction = lazy(() => import ("./pages/Transaction"));



const App = () => {
  return <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
    <Route path="/admin/dashboard" element={<Dashboard/>}/>
    <Route path="/admin/products" element={<Products/>}/>
    <Route path="/admin/customers" element={<Customers/>}/>
    <Route path="/admin/transaction" element={<Transaction/>}/>
    </Routes>
    </Suspense>
  </Router>
}

export default App