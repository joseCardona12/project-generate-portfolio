interface IVariant {
  dark: string;
  light: string;
}
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "dark" | "light";
}
export default function Input({
  variant,
  ...props
}: IInputProps): React.ReactNode {
  const variantClass: IVariant = {
    dark: "bg-[var(--color-black-light)]",
    light: "",
  };
  return (
    <input
      {...props}
      className={`outline-none p-2 rounded-[6px] ${variantClass[variant]}`}
    />
  );
}
