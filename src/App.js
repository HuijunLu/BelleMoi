import {Routes, Route, Outlet} from "react-router-dom";
import Home from './routes/home/home.component.jsx';


const App = () => {
  // An <Outlet> should be used in parent route elements to render
  // their child route elements. 
  const Navbar = () => {
    return(
      <div>
        <h1>This is navbar</h1>
        <Outlet />
      </div>
    )
  }

  const Test = () => {
    return (
      <h1>hello this is test page</h1>
    )
  }

  return (
    // wrap all the routes within Routes component
    <Routes>
      <Route path='/' element = {<Navbar></Navbar>}>
        <Route index element={<Home></Home>} />
        <Route path ='test' element={<Test></Test>}/>
      </Route>
    </Routes>

  );
};

export default App;
