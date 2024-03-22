import { MouseEvent } from 'react';
import style from '../../../style/chat.module.css';
import useContextProvider from '../../../context';

export interface Chat {
  Status: string;
  assignedOrganization: string;
  caseNumber: string;
  createdAt: string;
  id: number;
  locationLatitude: string;
  locationLongitude: string;
  mediaUrl: string;
  message: string;
  personName: string;
  personPhone: string;
}

const imgs = [
  "https://react-material.fusetheme.com/assets/images/avatars/male-01.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-02.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-02.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-03.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-03.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-04.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-04.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-04.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-04.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-05.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-05.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-06.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-06.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-07.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-07.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-08.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-08.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-09.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-09.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-10.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-10.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-11.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-11.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/male-12.jpg",
  "https://react-material.fusetheme.com/assets/images/avatars/female-12.jpg",
]

// @ts-ignore
const ListChats = () => {

  const { listChats, setChatActive, setTo } = useContextProvider();

  const setUserToviewChat = (ev:MouseEvent<HTMLAnchorElement>, newValue:string, personPhone:string): void => {
    ev.preventDefault();
    setChatActive( [ newValue ])
    setTo(personPhone);
  };

  const formatDate = (dateString: string | number) => {
    const fecha = new Date(dateString);
    const mesAbreviado = fecha.toLocaleString('es-ES', { month: 'short' });
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    const fechaFormateada = `${mesAbreviado} ${dia}, ${año}`;
    return fechaFormateada;
  };

  return (
    <div className={`${style.container_list_chats}`}>
      <div className={`${style['container_list_chats-title']}`}>
        <div className={`${style['list_chats-logo-name']}`}>
          Teclab Dev Solutions
        </div>
      </div>
      <div className={`${style['container_list_chats-chats']}`}>
        <ul className={`${style.list_chats_ul}`}>
          <div className={`${style['list_chats_ul-container']}`}>
            <div className={`${style['title-chats']}`}>
              <p className={`${style['title-chats-p']}`}>
                Chats
              </p>
            </div>
            <div className={`${style['title-chats']}`}>

              {listChats.map(({ personPhone, personName, caseNumber, createdAt, Status, message }, i: number) => (
                <div
                  key={i}
                  className={`${style['separator-chat']}`}
                >
                  <a
                    role='button'
                    tabIndex={0}
                    href={`${personPhone}`}
                    className={`${style['chat_option-a']}`}
                    onClick={ (ev) => setUserToviewChat(ev, message, personPhone) }
                  >
                    <span className={`${style['chat_option-icono']}`}>
                      <div className={`${style['chat_option-icono-div']}`}>
                        <img
                          src={imgs[Math.floor(Math.random() * imgs.length)]}
                          alt="image user"
                          className={`${style['chat_option-icono-img']}`}
                        />
                      </div>
                    </span>
                    <div className={`${style['chat_option-name']}`}>
                      <span className={`${style['chat_option-name-span']}`}>{personName}</span>
                      <p className={`${style['chat_option-name-p']}`}>caso #: {caseNumber}</p>
                    </div>
                    <div className={`${style['chat_option-date']}`}>
                      <p className={`${style['chat_option-date-p']}`}>{formatDate(createdAt)}</p>
                      <div style={{alignItems: "center"}}>
                        <div className={`${Status == "ACTIVO" && style['chat_option-notification']}`}>{Status}</div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ListChats
