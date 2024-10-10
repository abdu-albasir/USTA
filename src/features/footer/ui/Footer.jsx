import React from 'react';
import logo from '../../../shared/assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../header/ui/LanguageSwitcher';
import '../styles/footer.css'
import logo1 from '../../../shared/assets/logo-footer-1.png';
import logo2 from '../../../shared/assets/logo-footer-2.png';
import logo3 from '../../../shared/assets/logo-footer-3.png';
import logo4 from '../../../shared/assets/logo-footer-4.png'



const Footer = () => {
    const { t } = useTranslation(); // Инициализируем функцию t для переводов

    return (
        <footer className='footer'>
            <div className="container-f">
                <div className="container-footer">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <div className="footer-nav">
                        <h1>Навигация</h1>
                        <nav className="footer__nav">
                            <ul>
                                <li><Link className='nav' to="/">{t('Главная')}</Link></li>
                                <li><Link className='nav' to="/about">{t('О Сообществе')}</Link></li>
                                <li><Link className='nav' to="/nav3">{t('Мероприятие')}</Link></li>
                                <li><Link className='nav' to="/nav4">{t('Членство')}</Link></li>
                                <li><Link className='nav' to="/nav5">{t('Образование и сертификаты')}</Link></li>
                                <li><Link className='nav' to="/nav6">{t('Вакансии и заказы')}</Link></li>
                                <li><Link className='nav' to="/nav7">{t('Амбассадорство')}</Link></li>
                                <li><Link className='nav' to="/nav8">{t('Участие и волонтерство')}</Link></li>
                                <li><Link className='nav' to="/contact">{t('Контакты')}</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h1>Контакты</h1>
                        <a href="tel:+996559044072">+996 559 044 072</a>
                        <a href="mailto:example@example.com">saske8182@gmail.com</a>
                        <div className="footer-col-logo">
                            <img className='logo-footer-col' src={logo1} alt="r" />
                            <img className='logo-footer-col' src={logo2} alt="rr" />
                            <img className='logo-footer-col' src={logo3} alt="rrr" />
                            <img className='logo-footer-col' src={logo4} alt="rrrr" />
                        </div>
                    </div>
                </div>
                <hr />

            </div>

        </footer>
    );
}

export default Footer;
