import s from './Footer.module.scss';

const Footer = () => {

    return (
        <footer>
            <div className={s.last_wrap_items}>
                <div className={s.last_items_item}>
                    <p>Lacus interdum</p>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                </div>
                <div className={s.last_items_item}>
                    <p>Lacus interdum</p>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                </div>
                <div className={s.last_items_item}>
                    <p>Lacus interdum</p>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                </div>
                <div className={s.last_items_item}>
                    <p>Lacus interdum</p>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                    <a href="">» Lorem ipsum dolor</a>
                    <a href="">» Suspendisse in neque</a>
                    <a href="">» Praesent et eros</a>
                </div>
            </div>
            <small>
                <p className={s.leftstr}>Copyright © 2013 Domain Name - All Rights Reserved</p>
                <p className={s.rightstr}>Template by OS Templates</p>
            </small>
        </footer>
    );
}

export default Footer;