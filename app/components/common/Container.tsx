import React from "react";

export function Container({
  children,
  className = "",
  id = "",
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  id?: string;
}>) {
  return (
    <div
      id={id}
      className={`relative ${className} ${id != "hero" ? "py-14" : ""}`}
    >
      <div
        className={`container m-auto px-8 md:px-20 text-white flex ${
          id == "hero" ? "py-10 md:py-0" : "py-10 lg:py-20"
        } flex-col justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
}
