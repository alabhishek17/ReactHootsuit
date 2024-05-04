import style from "./css_body.module.css"
import rocket from "../../../public/rocket.svg"
import person from "../../../public/blogging.svg"
import blogging from "../../../public/person.svg"
function Body(){
    return (
        <div>
            <section className={style.top}>
                <h1 style={{marginTop:"10px",marginBottom:"10px",fontSize:"3.5rem"}}>See value from social sooner</h1> <br />
                <p style={{fontSize:"1.0rem"}}>Our traing and strategic services have helped</p>
                <p>thousand of organizations succeed on scocial.</p> <br />
                <button>Request a Demo</button>
            </section>
            <section className={style.bottom}>
                <div className={style.card}>
                <img style={{width:"150px"}} src={rocket} alt=""/> <br />
             <span>2,500</span>
             <p>enterprise organizations successfully lanunched</p>
                </div>
            <div className={style.card}><img style={{width:"150px"}} src={blogging} alt=""/> <br />
             <span>45,500</span>
             <p>enterprise users onboarded seamlessly</p></div>
             <div className={style.card}><img style={{width:"150px"}} src={person} alt=""/> <br />
             <span>200,000+</span>
             <p>professionals trained on product and strategy</p></div>
             
            </section>
        </div>
    )
}
export default Body;