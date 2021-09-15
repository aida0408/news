import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () =>{
    return(
       <div className="navbar">
          <div>
              <NavLink className="navbar-nav" to="/">
                  WORLDNEWS
              </NavLink>
          </div>
           <div>
               <NavLink exact className="navbar-nav" to="/">
                   Главная
               </NavLink>
               <NavLink className="navbar-nav" to="/news">
                   Новости
               </NavLink>
               <NavLink className="navbar-nav"to="/singin">
                   Войти
               </NavLink>
               <NavLink className="navbar-nav" to="/signup">
                   Зарегистрироваться
               </NavLink>
           </div>
       </div>

    )

}

export default Header