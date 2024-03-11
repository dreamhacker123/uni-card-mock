import React from "react";

import certlogo from "../public/pcidss_cert.svg"

export const CertificateSection = (): JSX.Element => {
  return (
    <div className="flex justify-center relative bg-black-2 textBox3">
      <div className="flex items-center justify-center p-4 text-grey-dark">
        <p>Uni maintains the highest level of security standards</p>
        <img
          src={certlogo}
          className="ml-3 w-20 css-0"
          width="80px"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};
