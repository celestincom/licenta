import React, { PropsWithChildren, useState } from "react";

export const RadioGroup = ({ children }: PropsWithChildren<{}>) => {
  // const [selectedId, setSelectedId] = useState("");

  return (
    <div
      role="radiogroup"
      className="radio-group"
      aria-labelledby="group_heading"
    >
      {children}
    </div>
  );
};

export const Radio = ({
  children,
  id,
  name,
  onChange
  ,
}: PropsWithChildren<{
  id: string;
  name: string;
  onChange: any;
}>) => {
  return (
    <>
      <input type="radio" id={id} name={name} onChange={onChange}/>
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </>
  );
};
