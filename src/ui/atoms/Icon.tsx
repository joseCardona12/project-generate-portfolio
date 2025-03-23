import { ReactElement } from "react";

interface IIConProps {
  icon: ReactElement;
  className: string;
}
export default function Icon({ icon, className }: IIConProps): React.ReactNode {
  return <span className={className}>{icon}</span>;
}
