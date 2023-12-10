import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from '../src/Pages/Shop.jsx';
import Cart from '../src/Pages/Cart.jsx';
import LoginSignup from '../src/Pages/LoginSignup.jsx';
import ShopCategory from '../src/Pages/ShopCategory.jsx';
import Product from '../src/Pages/Product.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
