export interface IFormContext {
  name: string;
  position: string;
  experience: string;
  description: string;
  completed_project: string;
}

export const initialFormContext: IFormContext = {
  name: "",
  position: "",
  experience: "",
  description: "",
  completed_project: "",
};
