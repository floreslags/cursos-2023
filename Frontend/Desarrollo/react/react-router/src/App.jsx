import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Error404 } from './pages/Error404';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { Services } from './pages/Services';
import { ServicesGuarantees } from './pages/ServicesGuarantees';
import { ServicesList } from './pages/ServicesList';
import { ServicesHome } from './pages/ServicesHome';
import { ServicesPolicies } from './pages/ServicesPolicies';
import { ServiceDetails } from './pages/ServiceDetails';


function App() {

  const[products,setProducts] =useState([
    {id:1,name:'product 1',price:100},
    {id:2,name:'product 2',price:200},
    {id:3,name:'product 3',price:300},
    {id:4,name:'product 4',price:400},
    {id:5,name:'product 5',price:500},
]);

const [services,setServices] = useState([
  {id:1,name:'Service 1',price:100},
  {id:2,name:'Service 2',price:200},
  {id:3,name:'Service 3',price:300},
  {id:4,name:'Service 4',price:400},
  {id:5,name:'Service 5',price:500},
]);

  return (
    <>
    <Header/>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/acerca' element={<Navigate to='/about'/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products products = {products}/>}/>
          <Route path='/products/:id' element={<ProductDetails products={products}/>}/>
          <Route path='/services' element={<Services/>}>
            <Route index element={<ServicesHome/>}/>
            <Route path='guarantee' element={<ServicesGuarantees/>}/>
            <Route path='list' element={<ServicesList services={services}/>}/>
            <Route path=':id' element={<>
              <ServicesList services={services}/>
              <ServiceDetails services={services}/>
            </>}/>
            <Route path='policies' element={<ServicesPolicies/>}/>
          </Route>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
