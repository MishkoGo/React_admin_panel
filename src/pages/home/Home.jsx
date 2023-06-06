import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <NavBar/>
          <div className="widgets">
            
          </div>
      </div>
    </div>
  )
}

export default Home
