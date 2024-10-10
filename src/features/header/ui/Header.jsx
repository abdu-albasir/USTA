import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../shared/assets/logo.png';
import banner from '../../../shared/assets/Rectangle 288.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import PopUp from './PopUp'; // Импортируем компонент попапа
import '../styles/header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для открытия/закрытия попапа

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const styles = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover', // Это позволит изображению заполнять весь контейнер
    height: '100vh', // Задайте высоту контейнера
    width: '100%', // Задайте ширину контейнера
    padding: '50px',
};
  return (
    <div style={styles}>
        <header className="header">
            <div className="header__container">
                <div className="header-head">
                <a href="#"><img src={logo} alt="Logo" className="header__logo" /></a>

                <div className="header-head-left">
                    <LanguageSwitcher />
                    <button className='btn-for-popup' onClick={openPopup}>
                    <p>Свяжитесь с нами</p>
                    </button>
                </div>
                </div>

                <hr />
                <div className="header-foot">
                <nav className="header__nav">
                    <ul>
                    <li><Link className='t' to="/">{t ('Главная')}</Link></li>
                    <li><Link className='t' to="/about">{t('О Сообществе')}</Link></li>
                    <li><Link className='t' to="/nav3">{t('Мероприятие')}</Link></li>
                    <li><Link className='t' to="/nav4">{t('Членство')}</Link></li>
                    <li><Link className='t' to="/nav5">{t('Образование и сертификаты')}</Link></li>
                    <li><Link className='t' to="/nav6">{t('Вакансии и заказы')}</Link></li>
                    <li><Link className='t' to="/nav7">{t('Амбассадорство')}</Link></li>
                    <li><Link className='t' to="/nav8">{t('Участие и волонтерство')}</Link></li>
                    <li><Link className='t' to="/contact">{t('Контакты')}</Link></li>
                    </ul>
                </nav>
                </div>
                
            </div>
            <div className="container-title">
                <h1 className="title-header">
                    Сообщество современных инженеров Центральной Азии
                </h1>
                <p className='text-header'>
                    “USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться
                </p>
                <button className="btn-header-title">
                    ПРИСОЕДИНИТЬСЯ
                </button>
            </div>

    

      {/* Добавляем компонент попапа, который отображается, если isPopupOpen === true */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <PopUp />
            <button className="popup-close" onClick={closePopup}>Закрыть</button>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;
