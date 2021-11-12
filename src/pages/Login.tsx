import { useContext } from 'react';
import { AuthContext } from '../context/index'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;
    
        auth.signin(username, () => {
          navigate('/', { replace: true });
        });
      }
    return (
        <div className="auth">
            <div className="container">
                <div className="auth__box">
                    <p className="auth__title">Авторизируйтесь</p>
                    <form action="" className="auth-form" onSubmit={handleSubmit}>
                        <input
                            name="username"
                            type="text"
                            className="auth-form__input"
                            placeholder="Логин"
                        />
                        <button className="btn" type="submit">Войти</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Login;