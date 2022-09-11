import { FC, useState, ChangeEvent, Fragment } from 'react';

import './login.scss';

import Input from './../../../components/input/input';
import Button from './../../../components/button/button';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginUser = (): void => {
    console.log(username, password);
  }
  return (
    <Fragment>
      <Input
        placeholder="username"
        type="text"
        onChange={handleUsernameChange}
      />
      <Input
        placeholder="password"
        type="password"
        onChange={handlePasswordChange}
      />
      <Button className="login-btn" buttonText="Log in" onClick={loginUser} />
    </Fragment>
  );
};

export default Login;
