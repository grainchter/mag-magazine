import s from './Header.module.scss';

const Header = () => {

    return (
        <header>
            <div className={s.header_head}>
                <ul className={s.top_menu}>
                    <li className={s.menu_item}>Sign Up</li>
                    <li className={s.menu_item}>Login</li>
                    <li className={s.menu_item}>RSS Feeds</li>
                    <li className={s.menu_item}>Archived News</li>
                </ul>
                <div className={s.header_deco}>
                    <div className={s.deco_item}></div>
                    <div className={s.deco_item}></div>
                    <div className={s.deco_item}></div>
                    <div className={s.deco_item}></div>
                </div>
            </div>
            <div className={s.header_main}>
                <h1>MAG MAGAZINE</h1>
                <p>ALL THE LATEST NEWS & INFORMATION IN THE WORLD</p>
            </div>
            <div className={s.header_navigation}>
                <ul className={s.main_menu}>
                    <li className={s.main_menu_item}>HOMEPAGE</li>
                    <li className={s.main_menu_item}>STYLE DEMO</li>
                    <li className={s.main_menu_item}>FULL WIDTH</li>
                    <li className={s.main_menu_item}>DROPDOWN</li>
                    <li className={s.main_menu_item}>LINK TEXT</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;