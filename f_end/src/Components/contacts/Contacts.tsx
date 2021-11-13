import { FC } from "react"
import './Contacts.scss'

const Contacts: FC = () => {
    return (
        <div className="contacts-container">
            <h1 className="contacts-page__title">Contacts</h1>

            <div className="main-contacts">
                <div className="contacts-item">
                    <h2>For administrative information</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed, odio ipsa
                        minus officia quas?
                    </p>
                    <div className="contacts">
                        <h4>
                            call us: <a href="tel:+61888888888">+61 888-888-888</a>
                        </h4>
                        <h4>
                            Mail us: <a href="mailto: PizzaTime@mail.com">PizzaTime@mail.com</a>
                        </h4>
                    </div>
                </div>

                <div className="contacts-item">
                    <h2>Have a question ?</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non incidunt voluptatibus autem tenetur et
                        provident?
                    </p>
                    <div className="contacts">
                        <h4>
                            call us: <a href="tel:+61888888888">+61 888-888-888</a>
                        </h4>
                        <h4>
                            Mail us: <a href="mailto: info@pizzatime.com.au">info@pizzatime.com</a>
                        </h4>
                    </div>
                </div>
                <div className="contacts-item">
                    <h2>Reservation</h2>
                    <p className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat odio consequuntur debitis
                        asperiores molestias.
                    </p>
                    <div className="contacts">
                        <h4>
                            call us: <a href="tel:+61888888888">+61 888-888-888</a>
                        </h4>
                        <h4>
                            Mail us: <a href="mailto: res@pizzatime.com.au">res@pizzatime.com</a>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="team">
                <h2 className="team__title">Become part of our team !</h2>
                <p>
                    In search of stardom and extravaganza? Email George Michael,
                    our recrutement officer since 1983 on
                    <a href="mailto: cv@pizzatime.com.au"> cv@pizzatime.com</a>
                </p>
                <h3>We need:</h3>
                <ul className="job-offers">
                    <li>Chefs</li>
                    <li>Waiters</li>
                    <li>Couriers</li>
                </ul>
            </div>
        </div>
    )
}
export default Contacts