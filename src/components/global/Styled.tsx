import React from "react";

interface StyledHeaderProps {
  tag: string;
  children: string;
}

export function StyledHeader({ tag, children }: StyledHeaderProps) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  let fontSize;

  switch (tag) {
    case "h1":
      fontSize = "text-4xl";
      break;
    case "h2":
      fontSize = "text-3xl";
      break;
    case "h3":
      fontSize = "text-2xl";
      break;
    case "h4":
      fontSize = "text-xl";
      break;
    default:
      fontSize = "text-base";
  }
  return (
    <Tag
      className={`${fontSize} font-semibold text-gray-800 dark:text-gray-200`}
      style={{
        margin: "revert",
      }}
    >
      {children}
    </Tag>
  );
}
