import React from "react";
import { MdOutlineBed, MdLocationPin } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { IDataBuilding } from "../../../mocks/dataBuilding";

const EnterpriseProject = (props: IDataBuilding) => {
  return (
    <div className="my-10 w-fit text-white font-light rounded-md shadow-lg">
      <h1 className="bg-gray-300 text-slate-900 opacity-50 rounded-t-lg font-light p-2  uppercase text-center">
        {props.stage}
      </h1>
      <img
        className="w-[400px] h-[400px] object-cover shadow-lg"
        src={props.image}
        alt="Foto ilustrativa da fachada do Topazio"
      />
      <div className="p-3 bg-gray-400 rounded-b-lg">
        <h2 className="text-2xl py-2">{props.title}</h2>
        <div className="flex items-center gap-2 my-2">
          <MdLocationPin size={25}/>
          <p className="">{props.city}</p>
        </div>
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
