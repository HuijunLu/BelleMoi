import {Routes, Route} from "react-router-dom";

import Home from './routes/home/home.component.jsx';
import Navbar from './routes/navbar/navbar.component.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'

const App = () => {
  // An <Outlet> should be used in parent route elements to render
  // their child route elements.
  const Test = () => {
    return (
      <h1>hello this is shop page</h1>
    )
  }

  return (
    // wrap all the routes within Routes component
    <Routes>
      <Route path='/' element = {<Navbar></Navbar>}>
        <Route index element={<Home></Home>} />
        <Route path ='shop' element={<Test></Test>}/>
        <Route path = 'auth' element={<Authentication></Authentication>}/>
      </Route>
    </Routes>
  );
};

export default App;
