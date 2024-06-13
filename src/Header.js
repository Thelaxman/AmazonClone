import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
import { useLocation } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const location = useLocation();
  const hideHeaderPath = "/login";

  const shouldHideHeader = location.pathname === hideHeaderPath;

  const handleauthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    !shouldHideHeader && (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
            alt="logo"
          />
        </Link>

        <div className="header_search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <div className="header_option" onClick={handleauthentication}>
            <span className="header_navoptionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <Link to={!user && "./login"}>
              {" "}
              <span className="header_navoptionTwo">
                {user ? "SignOut" : "SignIn"}
              </span>
            </Link>
          </div>
          <Link to="./orders">
            <div className="header_option">
              <span className="header_navoptionOne">Returns</span>
              <span className="header_navoptionTwo">& Orders</span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_navoptionOne">Your</span>
            <span className="header_navoptionTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header_basketIcon">
              <ShoppingBasket />
              <span className="header_navoptionTwo header_basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    )
  );
}

export default Header;
