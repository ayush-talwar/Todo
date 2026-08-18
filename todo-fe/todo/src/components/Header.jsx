import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { logoutUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  console.log('user',user);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login/');
  };

  return (
    <header className="py-3 mb-3 border-bottom">
      {" "}
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        {" "}
        <div className="dropdown">
          {/* {" "}
          <ul className="dropdown-menu text-small shadow">
            {" "}
            <li>
              <a className="dropdown-item active" href="#" aria-current="page">
                Overview
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Inventory
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Customers
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Products
              </a>
            </li>{" "}
            <li>
              <hr className="dropdown-divider" />
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Reports
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Analytics
              </a>
            </li>{" "}
          </ul>{" "} */}
        </div>{" "} 
        <div className="d-flex align-items-center">
          {" "}
          <form className="w-50 me-3" role="search">
            {" "}
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="flex-shrink-0 dropdown profile">
            {" "}
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
                <CgProfile style={{ width: "32", height: "32"}}/>
                {" "}
            </a>{" "}
            <ul className="dropdown-menu text-small shadow">
              {" "}
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>{" "}
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>{" "}
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>{" "}
              <li>
                <hr className="dropdown-divider" />
              </li>{" "}
              <li>
                <center>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Sign out</button>
                </center>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
