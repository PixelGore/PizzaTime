"use client";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import PizzaIcon from "@/app/common/icons/Pizza";
import "./About.scss";

export default function About() {
  return (
    <div className="about-content">
      <div className="about-section">
        <div className="about-section__image">
          <PizzaIcon className="section-about__logo" />
        </div>

        <div className="about-section__main">
          <h2 className="about-section__title">About us</h2>
          <p className="about-section__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            accusamus enim minima? Dolore, dignissimos aspernatur necessitatibus
            minus, enim magnam voluptate voluptatem rerum ullam non, aperiam
            alias corrupti officiis incidunt. Saepe consectetur quidem facilis
            omnis sed ratione laborum consequatur totam corrupti, non pariatur
            qui eveniet quibusdam accusantium quasi similique a nihil possimus
            tempora repellendus ipsum hic natus. Ad nemo possimus a ullam maxime
            dolore reiciendis earum, modi illum non aut quasi, deserunt
            repellendus consequuntur sed quo, rem explicabo natus dolorum
            inventore. Iste, non ut fugiat deserunt, ipsum quidem laboriosam
            molestiae doloremque fuga ea omnis. Ea impedit necessitatibus facere
            quidem voluptates neque perferendis aut, consequuntur nulla,
            commodi, alias incidunt? Repellat corporis necessitatibus rerum
            molestiae maxime minima excepturi doloribus nam est, facere corrupti
            labore omnis distinctio tempora dolorem consequatur quasi
            perferendis, ullam tenetur animi cumque ad odit? Quod accusantium
            impedit debitis blanditiis voluptates? Fugiat aliquam animi
            dignissimos velit aliquid odio iste soluta quibusdam omnis culpa,
            placeat necessitatibus? Dolorum esse neque illo adipisci quidem
            iusto ullam, non, veritatis autem sit placeat consequuntur alias
            labore natus deserunt cum. Officia, nisi voluptatem. Expedita amet
            similique fugit perferendis, quisquam voluptatem provident eligendi?
            Voluptatibus, ratione. Debitis veniam minima in aspernatur quam,
            voluptatum reiciendis vero quo assumenda et cum quis, sapiente
            natus? Voluptatum dolorem cum explicabo veniam amet libero, omnis
            similique deserunt quasi impedit esse asperiores rem iure. Dolor,
            quo sapiente saepe quidem quam quod enim? Praesentium sit repellat
            ipsum laborum. Dignissimos velit consequuntur natus illo neque omnis
            incidunt, harum officiis accusantium magni quidem reprehenderit
            impedit, aspernatur accusamus voluptatum, nostrum asperiores labore
            blanditiis alias! Expedita harum tenetur rerum id rem, commodi cum
            et architecto dolorum fugit mollitia magnam aspernatur voluptates
            illum voluptatibus reprehenderit ullam magni suscipit alias sed
            natus. Architecto enim quisquam asperiores sed aliquam, sequi
            repudiandae in beatae tempore dolore, quis rem quae ut sint sit,
            provident tenetur?
          </p>
          <hr className="mx-auto" />

          <div className="about-section__rating">
            <StarIcon className="material-icons" />
            <StarIcon className="material-icons" />

            <StarIcon className="material-icons" />

            <StarIcon className="material-icons" />
            <StarHalfIcon className="material-icons" />
          </div>

          <div className="about-section__review">
            <h3>"Best pizza in Melbourne"</h3>
            <p>
              A place with great atmosphere and even greater pizza. The pizza
              base is thin and the toppings are very rich. All of the pizzas
              made here are fresh so be patient as there is a decent wait time.
              The calamari is also expertly made, not greasy and very tender.
              Highly recommended if you're looking for an accompaniment to your
              pizza.
            </p>
            <h4>John Doe</h4>
          </div>
        </div>
      </div>
      <div className="about-secondary">
        <div className="map-section">
          <div className="map__info">
            <h4>Our location</h4>
            <h2>Visit us!</h2>
            <hr className="mx-auto" />
            <h4>We are located</h4>
            <p>415 Malvern Road South Yarra, Melbourne</p>
          </div>

          <div className="text-white flex text-center justify-center items-center bg-gray-400 p-4 w-[400px] h-[400px]">
            Google Maps with location here
          </div>
        </div>
        <div className="contact-section">
          <h3>Have a question ?</h3>
          <h2>Contact us</h2>
          <hr className="mx-auto" />
          <h4>
            call us: <a href="tel:+61888888888">+61 888-888-888</a>
          </h4>
          <h4>
            Mail us:
            <a href="mailto: info@pizzatime.com.au">info@pizzatime.com.au</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
