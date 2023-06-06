import "./sidebar.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">NeuroSmeta</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Главная</span>
          </li>
          <li>
            <CategoryOutlinedIcon className="icon"/>
            <span>Калькулятор</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon"/>
            <span>Поиск</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span>Выбрать Базу</span>
          </li>
          <hr/>
          <li>
            <EqualizerOutlinedIcon className="icon"/>
            <span>Инструкции</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon"/>
            <span>Написать отзыв</span>
          </li>
          <hr/>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Настройки</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Профиль</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Выйти</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
