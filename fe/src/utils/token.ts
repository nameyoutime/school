import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import { User } from '../types/User';

const cookies = new Cookies();
export enum Jwt {
  ACCESS_TOKEN = 'AccessToken',
}
export const setToken = (token: string) => {
  cookies.set(Jwt.ACCESS_TOKEN, token, { path: '/' });
};

export const getToken = () => {
  const token = cookies.get(Jwt.ACCESS_TOKEN);
  return token;
};

export const getDecodeToken = () => {
  const token = cookies.get(Jwt.ACCESS_TOKEN) ?? undefined;
  if(!token) return undefined;
  const decodedToken = jwt_decode(token) ?? undefined;

  return decodedToken as User;
};

export const removeToken = () => {
  return cookies.remove(Jwt.ACCESS_TOKEN);
};