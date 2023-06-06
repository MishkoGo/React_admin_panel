import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
          <div className="search">
              <input type="text" placeholder="Search..."/>
              <SearchOutlinedIcon/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsOffOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/16980257/pexels-photo-16980257/free-photo-of-portrait-of-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="avatar"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default NavBar
