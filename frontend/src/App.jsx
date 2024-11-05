import './App.css'
import Home from './pages/home/Home.jsx';
import Login from './pages/login/<Login>.jsx';
import SignUp from './pages/signup/SignUp.jsx';

function App() {
 
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Routes path='/'element={<Home/>}/>
        <Routes path='/login'element={<Login/>}/>
        <Routes path='/signup'element={<SignUp/>}/>

      </Routes>
    </div>
  )
}

export default App
