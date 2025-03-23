import { ReactElement } from "react";

interface ITitleVariant {
  h1: ReactElement;
  h2: ReactElement;
}
interface ITitleProps {
  title: string;
  className: string;
  variant: "h1" | "h2";
}
export default function Title({
  title,
  className,
  variant,
}: ITitleProps): React.ReactNode {
  const titleVariant: ITitleVariant = {
    h1: <h1 className={className}>{title}</h1>,
    h2: <h2 className={className}>{title}</h2>,
  };
  return <>{titleVariant[variant]}</>;
}
