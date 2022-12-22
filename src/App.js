import {Routes, Route} from "react-router-dom";

import Home from './routes/home/home.component.jsx';
import Navbar from './routes/navbar/navbar.component.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'
import Shop from './routes/shop/shop.component.jsx'

const App = () => {
  // An <Outlet> should be used in parent route elements to render
  // their child route elements.

  return (
    // wrap all the routes within Routes component
    <Routes>
      <Route path='/' element = {<Navbar></Navbar>}>
        <Route index element={<Home></Home>} />
        <Route path ='shop' element={<Shop></Shop>}/>
        <Route path = 'auth' element={<Authentication></Authentication>}/>
      </Route>
    </Routes>
  );
};

export default App;
