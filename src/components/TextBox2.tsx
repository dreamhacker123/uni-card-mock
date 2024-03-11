import React from "react";

export const TextBox2 = (): JSX.Element => {
  return (
    <div className="flex my-40 font-medium justify-start md:justify-center text-[26px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
      <p>
        Lifetime <span className="text-uni-green">free. </span>
        <span className="block sm:inline-block md:text-center">
          No joining fee.
        </span>
        <span className="block md:text-center"> No annual charges. </span>
      </p>
    </div>
  );
};
