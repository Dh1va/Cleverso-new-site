import Layout from "./Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from "./pages/Service";
// import Error404 from "./pages/404-page";  
import About from "./pages/About";


export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="*" element={<Error404 />} /> */}

        </Routes>
        
      </BrowserRouter>
    </Layout>
  );
}
