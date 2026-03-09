import css from '../css_modules/Header.module.css';
export default function Header({}){
    return(
         <header className={css.header}>
          <div className='container'>
        <nav className={css.header_nav}>
          <a href="#" className={css.logo}>Golden</a>
          <ul className={css.header_nav_list}>
            <li className={css.header_nav_list_item}>
              <a href="./" className={css.header_nav_list_item}>HOME</a>
            </li>
            <li className={css.header_nav_list_item}>
              <a href="./" className={css.header_nav_list_item}>SERVICES</a>
            </li>
            <li className={css.header_nav_list_item}>
              <a href="./" className={css.header_nav_list_item}>PORTFOLIO</a>
            </li>
            <li className={css.header_nav_list_item}>
              <a href="./" className={css.header_nav_list_item}>ABOUT</a>
            </li>
            <li className={css.header_nav_list_item}>
              <a href="./" className={css.header_nav_list_item}>CONTACT</a>
            </li>
          </ul>
        </nav>
        </div>
    </header>
    )
}