import { createContext, useContext, useState } from "react";
const userContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  function addUSer(user) {
    setUser(user);
  }
  return (
    <userContext.Provider value={{ user, addUSer }}>
      {props.children}
    </userContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(userContext);
};

export { UserProvider, useUserContext };
