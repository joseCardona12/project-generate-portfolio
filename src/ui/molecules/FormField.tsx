import Input from "../atoms/Input";

interface IFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function FormField({
  label,
  ...props
}: IFormFieldProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <Input variant="dark" {...props} />
    </div>
  );
}
