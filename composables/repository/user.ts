import { useApi, } from "../api";

export const useUser = () => {
  const api = useApi();

  function auth(userLogin: UserLogin){
    return api.post<{token: string}>("/auth", userLogin);
  }

  function dispatch(user: User){
    return api.post<UserRegisterResponse>("/user", user);
  }

  return { auth, dispatch };
};