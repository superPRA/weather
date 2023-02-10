import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Props = {};

export default function Contactme({}: Props) {
  return (
    <>
    <Helmet>
      <title>contact me</title>
    </Helmet>
      <div className="h-screen">
        <div className="hero min-h-screen max-w-3xl mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Send Me A Massage!</h1>
              <p className="py-6">
                Here you can send me any sort of opinion about my work or any
                flaw you might counter or any sort of suggestion for me.
                <br />
                <Link to="/home" className="link-primary">
                  home
                </Link>
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Massage</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="massage"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
