import React from "react";

export function Container({
  children,
  className = "",
  id = "",
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`relative ${className} `}>
      <div className='container m-auto px-8 md:px-5 text-white flex py-10 lg:py-20 flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
}
