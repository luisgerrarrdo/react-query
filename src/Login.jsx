import { Text } from '@mantine/core';
import { useQuery } from 'react-query';

const fetchLogin = () => fetch('/login.json').then((resp) => resp.json());
const fetchUser = (id) => fetch(`/${id}.json`).then((resp) => resp.json());

const login = async () => {
  const loginResp = await fetchLogin();
  const userResp =  await fetchUser(loginResp.id);

  return userResp;
}

function Login() {
  const { data: user } = useQuery('login', login);

  return <Text>{JSON.stringify(user)}</Text>
};

export default Login;