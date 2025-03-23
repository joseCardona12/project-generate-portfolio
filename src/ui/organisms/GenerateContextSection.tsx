"use client";
import { useContextState } from "@/app/core/application/global-states/context.state";
import Loading from "../atoms/Loading";
import Title from "../atoms/Title";

export default function GenerateContextSection(): React.ReactNode {
  const { context } = useContextState((state) => state);

  return (
    <section className="flex flex-col justify-center items-center p-4 h-[80vh] gap-3">
      <Title
        title="Generating Context ..."
        variant="h2"
        className="font-bold text-[1.2rem]"
      />
      <Loading />
      {JSON.stringify(context)}
    </section>
  );
}
