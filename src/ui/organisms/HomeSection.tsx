"use client";
import { useRouter } from "next/navigation";
import { IconDocumentPlus } from "../../../public/icons";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

export default function HomeSection(): React.ReactNode {
  const router = useRouter();
  return (
    <section className="flex flex-col p-4 justify-center gap-5 h-[80vh]">
      <Icon
        icon={<IconDocumentPlus />}
        className="text-[1.8rem] flex justify-center"
      />
      <p>
        Crea un portafolio rápido y sencillo a tráves de plantillas predefinidas
        que conectan con tu perfil.
      </p>
      <Button
        variant="dark"
        onClick={() => router.push("/context")}
        type="button"
      >
        Create
      </Button>
    </section>
  );
}
