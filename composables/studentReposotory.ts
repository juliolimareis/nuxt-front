const useStudent = () => {
  const api = useApi();

  function fetchAll(){
    return api.get<User>("/student");
  }

  function dispatch(user: User){
    return api.post<User>("/student", user);
  }

  return { fetchAll, dispatch };
};