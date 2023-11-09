import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { RandomButton } from '../../components';
import { useTranslation } from 'react-i18next';
import styles from "./Nav.module.css";
import { FaUser } from 'react-icons/fa';
import logo from '../../../../public/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

export const Nav = (props) => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }



    const { t } = useTranslation();
    const { onSearch, getRandomChar, user } = props;
    const { HOME, ABOUT, FAVORITES } = PATHROUTES;

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <a className={styles.appName} href="/#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                <div className={styles.column}>
                    <nav ref={navRef} className={styles.right}>
                        <li >
                            <Link className={styles.navLink} to={HOME}>{t('home')}</Link>
                        </li>
                        <li>
                            <Link className={styles.navLink} to={ABOUT}>{t('about')}</Link>
                        </li>
                        <li>
                            <Link className={styles.navLink} to={FAVORITES}>{t('favorites')}</Link>
                        </li>
                        <li className={styles.liButton}>
                            <RandomButton getRandomChar={getRandomChar} />
                        </li>
                        <li>
                            <div className={styles.userInfo}>
                                <span>{user?.email}</span>
                                <FaUser className={styles.userIcon} />
                            </div>
                        </li>
                        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className={styles.navBtn} onClick={showNavBar}>
                        <FaBars />
                    </button>
                </div>

            </nav>
        </>





        // <div className={styles.navContainer}>
        //     <div className={styles.left}>
        //         <Link className={styles.appName} to={HOME}>
        //             <img src={logo} alt="Logo" />
        //         </Link>
        //     </div>
        //     {/* <Link className={styles.navLink} to={HOME}>{t('home')}</Link> */}
        //     <Link className={styles.navLink} to={ABOUT}>{t('about')}</Link>
        //     <Link className={styles.navLink} to={FAVORITES}>{t('favorites')}</Link>
        //     <RandomButton getRandomChar={getRandomChar} />
        //     <div className={styles.userInfo}>
        //         <span>{user?.email}</span>
        //         <FaUser className={styles.userIcon} />
        //     </div>
        // </div>
    )
}