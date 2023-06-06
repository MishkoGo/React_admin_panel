import Datatable from "../../components/datatable/Datatable"
import NavBar from "../../components/navbar/NavBar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"


const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <NavBar/>
                <Datatable/>
            </div>
            </div>
    )
}

export default List