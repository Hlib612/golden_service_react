import css from '../css_modules/Hero.module.css';
export default function Hero(){
    return(
        <section className={css.section}>
         <div className={css.container}>
          <h1>SERVICES</h1>
          <ul className={css.section_list}>
            <li className={css.section_list_item}>
              <img src="./img/first-image.jpg" alt="E-Commerce" className={css.section_image}/>
              <h3 lang="fr" className={css.section_title}>E-Commerce</h3>
              <p lang="fr" className={css.section_paragraph}>
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt.
              </p>
            </li>
            <li className={css.section_list_item} >
              <img src="./img/second-image.jpg" alt="Responsive Web" className={css.section_image}/>
              <h3 lang="fr" className={css.section_title}>Responsive Web</h3>
              <p lang="fr" className={css.section_paragraph}>
                Proin iaculis purus consequat sem cure digni ssim. Donec
                porttitora entum suscipit aenean rhoncus posuere odio in
                tincidunt.
              </p>
            </li>
            <li className={css.section_list_item}>
              <img src="./img/third-image.jpg" alt="Web Security" className={css.section_image}/>
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
    )
}