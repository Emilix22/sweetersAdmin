import Home from '../Home/Home'
import Sidebar from '../Sidebar/Sidebar'
import './App.css'

function App() {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Home />
      </div>

    </div>
  )
}

export default App
