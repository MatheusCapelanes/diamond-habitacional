import BoxIcon from "./BoxIcon";
import { Lock, Clock, Umbrella, Car } from "@phosphor-icons/react";

export default function SectionProject() {
  return (
    <div className={`bg-[#FFD862] md:flex md:flex-col items-center rounded-b-[200px] h-[553px] p-4`}>
      <div className="w-full relative text-center md:px-[220px] md:py-[80px]">
        <p className="pb-4">O único empreendimento com <strong>3 dormitórios</strong> e lazer entregue na cobertura no formato de cooperativa, é a oportunidade perfeita de ter o <strong>melhor custo benefício na sua adesão!</strong></p>
      </div>
      <BoxIcon
        icon1={<Lock size={30} color="black" weight="fill"/>}
        text1={"Condomínio fechado"}
        icon2={<Clock size={30} color="black" weight="fill" />}
        text2={"Portaria 24 horas"}
      />
      <BoxIcon
        icon1={<Umbrella size={30} color="black" weight="fill" />}
        text1={"Lazer de clube"}
        icon2={<Car size={30} color="black" weight="fill" />}
        text2={"1 vaga para garagem"}
      />
    </div>
  );
}
