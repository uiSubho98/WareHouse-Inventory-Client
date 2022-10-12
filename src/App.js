import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import AddItems from './components/AddItems/AddItems';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SelectedItem from './components/SelectedItem/SelectedItem';
import MyItems from './components/MyItems/MyItems';
import Chat from './components/Chat/Chat'
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';



function App() {
  return (
    <div>
    <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/addItems'element={<AddItems></AddItems>}></Route>
      <Route path='/inventory' element={<PrivateRoute><Inventory></Inventory></PrivateRoute>}></Route>
      <Route path='/inventory/:id' element={<PrivateRoute><SelectedItem></SelectedItem></PrivateRoute>}></Route>
      <Route path='/myItems' element={<MyItems></MyItems>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    {/* <Chat></Chat> */}
    </div>
  );
}

export default App;
