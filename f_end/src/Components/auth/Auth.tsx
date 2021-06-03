import { Login } from "./Forms/Login"
import { Registration } from "./Forms/Registration"
import "./Auth.scss"
import { useState } from "react"
import rocket from "../../assets/common/rocket.svg"
import play from "../../assets/common/play.svg"



export const Auth = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={isActive ? "auth-container" : "auth-container active"}>

            <div className="forms-container">
                <Login />
                <Registration isActive={isActive} setIsActive={setIsActive} />
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquam,
                            quae sit nobis tempora ducimus inventore, ea consectetur nemo sed totam eos
                            repellendus adipisci, nulla ab enim excepturi maiores error.
                        </p>
                        <button className="btn transparent" onClick={() => setIsActive(!isActive)}>Sign in</button>
                    </div>
                    <img src={rocket} alt="signUp Img" className="image" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio quod at tempora. Necessitatibus quae sed, reiciendis neque itaque laboriosam aut,
                            in autem voluptatem, ut cumque vero quis placeat cum quaerat.
                        </p>
                        <button className="btn transparent" onClick={() => setIsActive(!isActive)}>Sign up</button>
                    </div>
                    <img src={play} alt="signUp Img" className="image" />
                </div>
            </div>

        </div>
    )
}