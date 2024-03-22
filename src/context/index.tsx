import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Chat } from "../view/chat/components/ListChats";

interface UserContextProps {
  listChats: Array<Chat>;
  setListChats: any;
  chatActive: Array<string[]>;
  setChatActive: any;
  to: string;
  setTo: Dispatch<SetStateAction<any>>;
}

export const InitialUserContextProps = {
  listChats: [],
  setListChats: () => {},
  chatActive: [],
  setChatActive: () => {},
  to: "",
  setTo: () => {},
};

export const UserContext = createContext<UserContextProps>(InitialUserContextProps);

export const UserContextProvider = ({children}:any) => {
  const [listChats, setListChats] = useState([]);
  const [chatActive, setChatActive] = useState([]);
  const [to, setTo] = useState("");

  return (
    <UserContext.Provider value={{ listChats, setListChats, chatActive, setChatActive, to, setTo }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useContextProvider() {
  return useContext( UserContext )
}
