import {NavLink} from 'react-router-dom'
import './nav.css';

const Header = () => {
  return (
    <div id="mainNav">
      <div id='mainNavIndicator'>MENU</div>
        <nav>
          <ul>
            <li id ="navSelectRequisition">
            <NavLink to="/Requisitions">Requisitions</NavLink>
            </li>
            <li id="navSelectSubmissions">
            <NavLink to="/submission">Submissions</NavLink>
            </li>
            <li id="navSelectCandidates"> 
              <NavLink to="/candidates">Candidates</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header