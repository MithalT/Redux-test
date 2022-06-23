import classes from './Header.module.css';
import { useSelector } from 'react-redux/es/exports';
import { authActions } from '../store/auth-slice'; 
import { useDispatch } from 'react-redux/es/hooks/useDispatch';


const Header = () => {
  const isAuth = useSelector(state => state.authReducer.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}

    </header>
  );
};

export default Header;
