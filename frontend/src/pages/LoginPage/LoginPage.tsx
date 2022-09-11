import { FC, useState } from 'react';
import './LoginPage.scss';

import Button from './../../components/button/button';
import Login from './components/login';
import Register from './components/register';

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = () => {
  const [login, setLogin] = useState<boolean>(true);

  const handleLoginChange = (): void => {
    setLogin(!login);
  };

  return (
    <div className="login-content">
      <div className="login-window">
        {login ? <Login /> : <Register />}
        <div className="section">
          <hr className="line" />
          or
          <hr className="line" />
        </div>
        <Button
          buttonText={login ? 'Register' : 'Login'}
          onClick={handleLoginChange}
          style={{ marginTop: '10px' }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
