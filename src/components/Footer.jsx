import css from '../css_modules/Footer.module.css';
export default function Footer({}){
    return(
        <footer className={css.footer}>
      <div className="container">
        <h2  className={css.footer_title}>CONTACT US</h2>
        <ul className={css.form_list}>
         <li>
          <form className={css.sign_up_form}>
            <div className={css.first_wrapper}>
              <label className={css.form_element}>
                <input type="text" name="name" placeholder="YOUR NAME*" className={css.placeholder_name}/>
              </label>
              <label className={css.form_element}>
                <input type="email" name="email" placeholder="YOUR E-MAIL*" className={css.placeholder_email}/>
              </label>
              <label className={css.form_element}>
                <input type="text" name="subject" placeholder="SUBJECT" className={css.placeholder_subject}/>
              </label>
            </div>
          </form>
         </li>
          <li>
            <form className={css.feedback}>
              <div className={css.second_wrapper}>
                <label>
                  <textarea
                    name="feedback"
                    rows="5"
                    placeholder="YOUR MESSAGE*"
                    className={css.text_area}
                    ></textarea>
                </label>
              </div>
            </form>
          </li>
        </ul>
        <button type="submit" className={css.button}>SEND MESSAGE</button>
      </div>
    </footer>
    )
}