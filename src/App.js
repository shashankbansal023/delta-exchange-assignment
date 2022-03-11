import {BrowserRouter as Router , Routes ,Route , Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {useSelector} from 'react-redux'

function App() {

  let user = localStorage.getItem('user');
  const {userDetails} = useSelector(state=> state.custom)

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={user ? (userDetails.isLogin ?  <Navigate to="/home"/>: <Navigate to="/login"/>): <Navigate to="/signup"/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
