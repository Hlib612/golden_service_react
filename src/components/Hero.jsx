import css from '../css_modules/Hero.module.css';
import bascet from '../img/bascet.png'
import right from '../img/right.png'
import lock from '../img/lock.png'
export default function Hero(){
    return(
      <main>
        <section className={css.section}>
         <div className="container">
          <h1 className={css.title}>SERVICES</h1>
          <ul className={css.section_list}>
            <li className={css.section_list_item}>
              <div className={css.section_image}>
              <img src={bascet} alt="E-Commerce" className={css.section_picture_bascet}/>
              </div>
              <h3 lang="fr" className={css.section_title}>E-Commerce</h3>
              <p lang="fr" className={css.section_paragraph}>
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt.
              </p>
            </li>
            <li className={css.section_list_item} >
              <div className={css.section_image}>
              <img src={right} alt="Responsive Web" className={css.section_picture_right}/>
              </div>
              <h3 lang="fr" className={css.section_title}>Responsive Web</h3>
              <p lang="fr" className={css.section_paragraph}>
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt.
              </p>
            </li>
            <li className={css.section_list_item}>
              <div className={css.section_image}>
              <img src={lock} alt="Web Security" className={css.section_picture_lock}/>
              </div>
              <h3 lang="fr" className={css.section_title}>Web Security</h3>
              <p lang="fr" className={css.section_paragraph}>
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt.
              </p>
            </li>
          </ul>
        </div>
        </section>
        </main>
    )
}