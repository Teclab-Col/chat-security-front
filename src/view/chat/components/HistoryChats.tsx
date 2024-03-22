// import React from 'react';
import { useState } from 'react';

import useContextProvider from '../../../context';
import style from '../../../style/chat.module.css';
import Routes from '../../../api/routes.routes';
import axios from 'axios';

const HistoryChats = () => {

  const { chatActive, setChatActive, to } = useContextProvider();
  const [inputWrite, setInputWrite] = useState("");

  const handleResponseMessageUser = async (message:string) => {
    const routeApi = `${Routes.api.sendMessage}`;
    const response = await axios.post(routeApi, {
      message,
      to
    });
    console.log('response', response);
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();

    setChatActive( (prev:string[]) => [...prev, inputWrite ])
    setInputWrite("");

    handleResponseMessageUser(inputWrite);
  };


  return (
    <div className={`${style["pageSimple-contentWrapper"]}`}>
      <div className={`${style["pageSimple-content"]}`}>
        <div className={`${style["pageSimple-header"]}`}>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={`${style["pageSimple-body"]}`}>
          <div className={`${style['pageSimple-body-container']}`}>
            <div className={`${style.historyChatBox}`}>
              {chatActive.map((message) => (
                <p>{message}</p>
              ))}
            </div>
            <form onSubmit={handleSendMessage}>
              <div className={`${style.messageBox}`}>
                <input
                  required
                  placeholder="Message..."
                  type="text"
                  className={`${style.messageInput}`}
                  value={inputWrite}
                  onChange={(ev) => setInputWrite(ev.target.value)}
                />
                <button
                  className={`${style.sendButton}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                    <path
                      fill="none"
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    ></path>
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="33.67"
                      stroke="#6c6c6c"
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    ></path>
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryChats
