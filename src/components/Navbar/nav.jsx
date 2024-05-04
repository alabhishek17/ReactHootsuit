import style from "./css_nav.module.css"
import LOGO from "../../../public/images.png"
function Nav(){
    return(
        <div className={style.navLi}>
            <section className={style.nright}>
            <img src={LOGO} alt="" style={{width:"40px"}}/>
            <h3>Hootsuite</h3>
            </section>
            
            <section>
            <ul className={style.Nmiddle}>
                <li>Platform</li>
                <li>Plans</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Education</li>
            </ul>
            </section>
        <section className={style.Nleft}>
          <h3>Contact Us</h3>
          <h3>Log In</h3>
          <button>Sign In</button>
        </section>
        </div>
    )
}
export default Nav;