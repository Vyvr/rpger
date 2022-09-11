import { FC, Fragment, useState, ChangeEvent } from 'react';

import Input from './../../../components/input/input';
import Button from './../../../components/button/button';
import InfoLabel from './../../../components/infoLabel/infoLabel';
import { TextColor } from './../../../enums';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [mail, setMail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [dataError, setDataError] = useState<boolean>(false);

  const handleMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setRePassword(e.target.value);
  };

  const createUser = () => {
    if (
      password.length === 0 ||
      rePassword.length === 0 ||
      rePassword !== password
    ) {
      setDataError(true);
      return;
    }
    setDataError(false);
    const arr: string[] = [mail, username, password, rePassword];
    console.log(arr);
  };

  return (
    <Fragment>
      <Input
        placeholder="e-mail"
        type="text"
        onChange={handleMailChange}
      />
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
      <Input
        placeholder="re-enter password"
        type="password"
        onChange={handleRePasswordChange}
      />
      <Button
        className="login-btn"
        buttonText="Create account"
        onClick={createUser}
      />
      {dataError ? (
        <div style={{ marginTop: '15px' }}>
          <InfoLabel
            text="Passwords doesn't match and can't be empty"
            color={TextColor.red}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default Register;
