import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/shared/Loader"

const Home=lazy(()=>import("./pages/home/Home"))
const Navbar=lazy(()=>import("./components/shared/Navbar"))
const Footer=lazy(()=>import("./components/shared/Footer"))
const Category=lazy(()=>import("./pages/category/Category"))
const Blog=lazy(()=>import("./pages/blog/Blog"))



function App() {
  
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/blogs/:id" element={<Blog/>}/>
      </Routes>
      </Suspense>
      <Footer/>
    </Router>
  )
}

export default App
