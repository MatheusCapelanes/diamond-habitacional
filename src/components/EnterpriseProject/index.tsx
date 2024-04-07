import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";

interface EnterpriseProjectProps {
  title: string;
  image: string;
  stage: string;
  bedrooms: number;
  garage: boolean;
}

const EnterpriseProject = (props: EnterpriseProjectProps) => {
  return (
    <div className="my-10 w-fit text-white">
      <h1 className="bg-gray-300 text-slate-900 opacity-50  rounded-t-lg font-semibold p-2 font-inter uppercase text-center">
        {props.stage}
      </h1>
      <img
        className="w-[400px] h-[400px] object-cover shadow-lg"
        src={props.image}
        alt="Foto ilustrativa da fachada do Topazio"
      />
      <div className="p-3 bg-zinc-400 rounded-b-lg">
        <h2 className="font-semibold text-2xl py-2">{props.title}</h2>
        {props.bedrooms && props.bedrooms > 0 ? (
          <div className="flex items-center gap-2">
            <MdOutlineBed size={25} />
            <p>{`${props.bedrooms} Dormitorios`}</p>
          </div>
        ) : null}
        {props.garage && (
          <div className="flex items-center gap-2 mt-2">
            <FaCarSide size={25} />
            <p>Com Garagem</p>
          </div>
        )}
      </div>
      {/* <button className="bg-gold text-black w-full rounded-lg mt-2 p-2 uppercase font-semibold tracking-wide hover:scale-y-110">
        Saiba Mais
      </button> */}
    </div>
  );
};

export default EnterpriseProject;
