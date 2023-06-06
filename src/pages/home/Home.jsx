import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <NavBar/>
          <div className="widgets">
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
