import React from 'react'

import {NavLink} from 'react-router-dom'

const Header = () =>{

    return(
       <div className="nav">
          <div>
              <NavLink className="nav-nav" to="/">
                  WORLDNEWS
              </NavLink>
          </div>
           <div>
               <NavLink exact className="nav-nav" to="/">
                   Главная
               </NavLink>
               <NavLink className="nav-nav" to="/news">
                   Новости
               </NavLink>
               <NavLink className="nav-nav"to="/singin">
                   Войти
               </NavLink>
               <NavLink className="nav-nav" to="/signup">
                   Регистрация
               </NavLink>
               <NavLink className="nav-nav" to="/students">
                   Студенты
               </NavLink>
               <button>Обратная связь</button>
           </div>
       </div>

    )

}

export default Header