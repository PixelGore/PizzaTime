"use client";
import { useState } from "react";
import Image from "next/image";

import { Login } from "./Forms/Login";
import { Registration } from "./Forms/Registration";
import "./Auth.scss";

export default function Auth() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "auth-container active" : "auth-container"}>
      <div className="forms-container">
        <Login />
        <Registration setIsActive={setIsActive} active={isActive} />
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              aliquam, quae sit nobis tempora ducimus inventore, ea consectetur
              nemo sed totam eos repellendus adipisci, nulla ab enim excepturi
              maiores error.
            </p>
            <button
              className="btn transparent"
              onClick={() => setIsActive(!isActive)}
            >
              Sign in
            </button>
          </div>
          <Image
            src="/assets/common/rocket.svg"
            alt="signUp Img"
            className="image"
            width={2000}
            height={2000}
          />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quod at tempora. Necessitatibus quae sed, reiciendis
              neque itaque laboriosam aut, in autem voluptatem, ut cumque vero
              quis placeat cum quaerat.
            </p>
            <button
              className="btn transparent"
              onClick={() => setIsActive(!isActive)}
            >
              Sign up
            </button>
          </div>
          <Image
            src="/assets/common/play.svg"
            alt="signUp Img"
            className="image"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
}
