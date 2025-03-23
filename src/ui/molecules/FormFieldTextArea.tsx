import TextArea from "../atoms/TextArea";

interface IFormFieldTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export default function FormFieldTextArea({
  label,
  ...props
}: IFormFieldTextAreaProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <TextArea variant="dark" {...props} />
    </div>
  );
}
