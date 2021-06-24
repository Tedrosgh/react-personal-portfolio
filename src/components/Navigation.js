import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="Navigation p-3 border-bottom">
    <ul className="d-flex bg-secondary justify-content-between lists">
      <li className="me-3 list-group-item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink exact to="/profile">
          About me
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink exact to="/service">
          service
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink exact to="/contact">
          contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
