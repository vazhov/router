import { useContext } from 'react'
import { Link, useNavigate, NavLink} from 'react-router-dom'
import { AuthContext } from '../context/index'

const Header = () => {
    let navigate = useNavigate();
    const { user, signout } = useContext(AuthContext);
    const logout = () => {
        signout(() => navigate('/'))
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <NavLink to="/" className="logo header__logo">LOGO</NavLink>
                    {user && <p className="header__hello"><b>{user}</b>, привет</p>}
                    <nav className="menu">
                        <Link to="/" className="menu__item">Home</Link>
                        <Link to="/about" className="menu__item">About</Link>
                        {!user
                            ? <Link to="/login" className="menu__item">Login</Link>
                            : <Link to="/login" className="menu__item" onClick={logout}>logout</Link>
                        }
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;