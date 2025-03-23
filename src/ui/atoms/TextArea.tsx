interface IVariant {
  dark: string;
  light: string;
}
interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: "dark" | "light";
}
export default function TextArea({
  variant,
  ...props
}: ITextAreaProps): React.ReactNode {
  const variantClass: IVariant = {
    dark: "bg-[var(--color-black-light)]",
    light: "",
  };
  return (
    <textarea
      {...props}
      className={`outline-none p-2 rounded-[6px] ${variantClass[variant]}`}
    />
  );
}
