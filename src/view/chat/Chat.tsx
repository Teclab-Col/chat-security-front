// import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import style from '../../style/chat.module.css';
import ListChats from './components/ListChats';
import HistoryChats from './components/HistoryChats';
import Routes from '../../api/routes.routes';
import { organizations as org } from '../../components/tools/organizations';
import OrganizationsList from './components/OrganizationsList';
import useContextProvider from '../../context';

const Chat = () => {
  const navigate = useNavigate();

  const { setListChats } = useContextProvider();

  const getMessage = async () => {
    // @ts-ignore
    const routeApi = `${Routes.api.messageByOrganization}?org=${org[sessionStorage.getItem('organization')]}`
    const response = await axios.get(routeApi);
    const data = response.data;
    console.log('data: ', data);
    setListChats(data);
  }

  const logOut = () => {
    localStorage.removeItem("organization");
    navigate('/');
  };

  useEffect(() => {
    getMessage();
  }, [])


  return (
    <>
      <div className={`${style.navbar}`}>
        <button
          className='bg-blue-500 text-white block w-full rounded-sm p-2'
          onClick={logOut}
        >salir</button>
        <OrganizationsList/>
      </div>
      <div className={`${style.container_chat}`}>
        <div className={`${style.list_chats}`}>
          <ListChats/>
        </div>
        <div className={`${style.history_chat}`}>
          <HistoryChats
          />
        </div>
      </div>

    </>
  )
}

export default Chat;
