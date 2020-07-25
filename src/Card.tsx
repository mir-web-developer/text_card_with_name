import React from "react";

export const Card = () => {
  return (
    <>
      {/* <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="https://picsum.photos/50/50" alt="dd" className="circle responsive-img" /> 
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="col s2">
              <img
                src="https://picsum.photos/50/50"
                className=" circle "
                alt=""
              />
            </div>
            <div className="card-content white-text">
              <span className="left-align card-title  accent-3">MIR</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div className="card-action">
              <div className="right-align white-text">20:18</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
