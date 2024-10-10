// src/components/LanguageSwitcher.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Для управления состоянием выпадающего меню

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Закрываем меню после выбора языка
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Переключаем состояние меню
  };

  return (
    <div className="language-switcher">
      <button className="dropdown-button" onClick={toggleDropdown}>
        RU <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#" onClick={() => changeLanguage('en')} className="dropdown-item">EN</a>
          <a href="#" onClick={() => changeLanguage('ru')} className="dropdown-item">RU</a>
          <a href="#" onClick={() => changeLanguage('kg')} className="dropdown-item">KGZ</a>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

