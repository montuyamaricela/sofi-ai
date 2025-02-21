import React from "react";

export default function SpanText({
  text,
  spanText,
  className,
}: {
  text: string;
  spanText: string;
  className?: string;
}) {
  return (
    <p className={className}>
      {text}
      <span className='text-primary-color'>{spanText}</span>
    </p>
  );
}
