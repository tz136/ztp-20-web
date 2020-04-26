import React from 'react';

import BaseLink from '../../core/components/BaseLink';

import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            Gululu
        </div>
        <ul className={styles.header__menu}>
            <BaseLink to="/" content={ <li>HomePage</li> } applyHover={ true } />
            <BaseLink to="/interview" content={ <li>Interview</li> } applyHover={ true } />
            <BaseLink to="/market" content={ <li>Market</li> } applyHover={ true } />
        </ul>
    </div>
)

export default Header;