import css from '../css_modules/Footer.module.css';
export default function Footer({}){
    return(
        <footer className={css.footer}>
      <div className="container">
        <h2>CONTACT US</h2>
        <ul className="form-list">
         <li>
          <form className="sign_up-form">
            <div className="first-wrapper">
              <label className="form-element">
                <input type="text" name="name" placeholder="YOUR NAME*" className="placeholder-name"/>
              </label>
              <label className="form-element">
                <input type="email" name="email" placeholder="YOUR E-MAIL*" className="placeholder-email"/>
              </label>
              <label className="form-element">
                <input type="text" name="subject" placeholder="SUBJECT" className="placeholder-subject"/>
              </label>
            </div>
          </form>
         </li>
          <li>
            <form className="feedback">
              <div className="second-wrapper">
                <label className="">
                  <textarea
                    name="feedback"
                    rows="5"
                    placeholder="YOUR MESSAGE*"
                    className="text-area"
                    ></textarea>
                </label>
              </div>
            </form>
          </li>
        </ul>
        <button type="submit" className="button">SEND MESSAGE</button>
      </div>
    </footer>
    )
}