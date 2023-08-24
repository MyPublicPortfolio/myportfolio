import React from "react";

export const CommonInfo = () => {
  return (
    <>
      <div className="w-100 p-5 text-center mt-5 fs-4 fw-bolder text-danger">
        <h1>Hi, I am Harsh Dutt.</h1>
      </div>
      <div className="w-100 p-5 text-left mt-5 fs-4 fw-bolder text-danger">
        <p>Name: Harsh Dutt.</p>
        <p>Mobile: +91 8095859689</p>
        <p>
          Email:{" "}
          <a href="mailto:harsh.dutt01@gmail.com">harsh.dutt01@gmail.com</a>
        </p>
      </div>
    </>
  );
};
