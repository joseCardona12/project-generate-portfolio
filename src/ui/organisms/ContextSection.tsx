"use client";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormField from "../molecules/FormField";
import {
  IFormContext,
  initialFormContext,
} from "@/app/core/application/interfaces/formContext.interface";
import FormFieldTextArea from "../molecules/FormFieldTextArea";
import { IconArrowBack } from "../../../public/icons";
import BarLoading from "../atoms/BarLoading";
import Util from "@/app/core/application/utils/Util.util";
import { useRouter } from "next/navigation";
import { useContextState } from "@/app/core/application/global-states/context.state";

export default function ContextSection(): React.ReactNode {
  const [formContextData, setFormContextData] =
    useState<IFormContext>(initialFormContext);

  const [increment, setIncrement] = useState<number>(1);
  const { setContext } = useContextState((state) => state);
  const router = useRouter();

  const handleClick = (type?: string): void => {
    if (!type) {
      setIncrement((prev) => prev + 1);
    } else {
      setIncrement((prev) => prev - 1);
    }
  };

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setContext(formContextData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormContextData({
      ...formContextData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (increment === 6) {
      console.log("hola");
      router.push("/context/generate_context");
    }
  }, [increment]);

  return (
    <section className="flex flex-col justify-center p-4 h-[80vh]">
      <BarLoading width={Util.getPercentaje(increment, 6)} />
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <Title
          variant="h2"
          className="font-bold text-[1.2rem]"
          title="Creating context ..."
        />
        {increment === 1 && (
          <FormField
            name="name"
            value={formContextData.name}
            label="Name:"
            onChange={handleChange}
          />
        )}
        {increment === 2 && (
          <FormField
            name="position"
            value={formContextData.position}
            label="Position:"
            onChange={handleChange}
          />
        )}
        {increment === 3 && (
          <FormField
            name="experience"
            value={formContextData.experience}
            label="Number experience:"
            onChange={handleChange}
            type="number"
          />
        )}
        {increment === 4 && (
          <FormFieldTextArea
            name="description"
            value={formContextData.description}
            label="Description:"
            onChange={handleChange}
          />
        )}
        {increment === 5 && (
          <FormField
            name="completed_project"
            value={formContextData.completed_project}
            label="Completed Projects:"
            onChange={handleChange}
            type="number"
          />
        )}
        <Button variant="dark" onClick={() => handleClick()} type="submit">
          Send
        </Button>
        {increment >= 2 && increment <= 5 && (
          <p
            onClick={() => handleClick("subtract")}
            className="flex items-center gap-1 justify-start p-0 cursor-pointer"
          >
            <IconArrowBack />
            Go Back
          </p>
        )}
      </form>
    </section>
  );
}
