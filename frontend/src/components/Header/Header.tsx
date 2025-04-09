import { useState } from 'react';
import styles from './Header.module.scss';

export function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    return (
        <header className={styles.main_header}>
            <div className={styles.dropdownWrapper}>
                <button
                    className={styles.menuButton}
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    aria-label="Открыть меню"
                >
                    <img
                        src="/flowersIcon.svg"
                        alt=""
                        className={styles.menuIcon}
                        width={90}
                    />
                </button>

                {isDropdownOpen && (
                    <nav className={styles.dropdownMenu}>
                        <a href="/" className={styles.menuLink}>Главная</a>
                        <a href="/catalog" className={styles.menuLink}>Каталог</a>
                        <a href="/enter" className={styles.menuLink}>Кабинет</a>
                        <a href="/сontent" className={styles.menuLink}>Контент</a>
                        <a href="/сontacts" className={styles.menuLink}>Контакты</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
