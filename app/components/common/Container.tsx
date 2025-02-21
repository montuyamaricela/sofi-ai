import React from "react";

export function Container({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className='container m-auto px-8 md:px-0 text-white flex py-10 lg:py-20 flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
}
