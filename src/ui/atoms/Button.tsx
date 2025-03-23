import { HTMLAttributes } from "react";

interface IVariant {
  dark: string;
  light: string;
}
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "dark" | "light";
  type: "submit" | "reset" | "button";
}
export default function Button({
  children,
  variant,
  type,
  ...props
}: IButton): React.ReactNode {
  const variantClass = {
    dark: "bg-[var(--color-black-light)] text-white hover:bg-[var(--color-black-light-hover)]",
    light: "bg-red-400",
  };
  return (
    <button
      {...props}
      type={type}
      className={`p-2 pl-4 pr-4 rounded-[10px] ${variantClass[variant]} cursor-pointer transition-colors .4s ease-in`}
    >
      {children}
    </button>
  );
}
