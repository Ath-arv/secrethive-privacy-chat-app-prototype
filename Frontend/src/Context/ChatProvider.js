import { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const chatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (userInfo === undefined) {
      history.push("/");
    }
  }, [history]);

  return (
    <chatContext.Provider value={{ user, setUser }}>
      {children}
    </chatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(chatContext);
};

export default ChatProvider;
