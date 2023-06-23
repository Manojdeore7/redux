import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sliceAuthActions } from "../strore/Auth";

const Header = () => {
  let isAuth = useSelector((state) => state.auth.isAuthenticated);
  let dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(sliceAuthActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onClickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
