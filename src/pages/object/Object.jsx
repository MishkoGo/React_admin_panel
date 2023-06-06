import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material"
import NavBar from "../../components/navbar/NavBar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./object.scss"

export default function Object() {
  return (
    <div className="object">
        <Sidebar/>
        <div className="objectTitleContainer">
            <NavBar/>
            <div className="objectTitleContainer_2">
              <h1 className="userTitle">Edit</h1>
              <button className="userAddButton">Create</button> 
            </div>
            <div className="userContainer">
                <div className="userShow">
                  <div className="userShowTop">
                    
                     <div className="userShowTopTitle">
                      <span className="userShowUsername">
                        Инструкция ТЭЦ-600
                      </span>
                      <span className="userShowUserTitle">
                        
                      </span>
                     </div>
                  </div>
                  <div className="userShowBottom">
                    <span className="userShowTitle">Details</span>
                    <div className="userShowInfo">
                      
                    </div>
                    <div className="userShowInfo">
                      <CalendarToday className="userShowIcon"/>
                      <span className="userShowInfoTitle">10.04.2023</span>
                    </div>
                    
                    <div className="userShowInfo">
                      <PhoneAndroid className="userShowIcon"/>
                      <span className="userShowInfoTitle">+123 219 23 23</span>
                    </div>
                    <div className="userShowInfo">
                     
                    </div>
                    <div className="userShowInfo">
                      <LocationSearching className="userShowIcon"/>
                      <span className="userShowInfoTitle">Минск</span>
                    </div>
                  </div>
                </div>
                {/* <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="ana" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="ana" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="ana" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="ana" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="ana" className="userUpdateInput"/>
                      </div>
                    </div>
                    <div className="userUpdateRight">

                    </div>
                  </form>
                </div> */}
            </div>
        </div>
    </div>
  )
}
