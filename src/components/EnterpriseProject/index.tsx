import React from "react";
import { MdOutlineBed, MdLocationPin } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { IDataBuilding } from "../../../mocks/dataBuilding";
import Link from "next/link";

const EnterpriseProject = (props: IDataBuilding) => {
  return (
    <Link
      href={props.router}
      className="group block my-10 w-full max-w-2xl bg-white text-slate-900 font-light rounded-2xl shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-3xl"
    >
      <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-t-2xl font-semibold p-4 text-lg uppercase text-center tracking-wider">
        {props.stage}
      </h1>
      <div className="overflow-hidden rounded-b-2xl">
        <img
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          src={props.image}
          alt={`Foto ilustrativa da fachada do ${props.title}`}
        />
      </div>
      <div className="p-8 bg-gray-50 rounded-b-2xl">
        <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MdLocationPin size={26} />
          <span className="text-lg">{props.city}</span>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          {props.bedrooms && props.bedrooms.length > 0 && (
            <div className="flex items-center gap-2 text-gray-700 text-lg">
              <MdOutlineBed size={24} />
              <span>{props.bedrooms}</span>
            </div>
          )}
          {props.garage && (
            <div className="flex items-center gap-2 text-gray-700 text-lg">
              <FaCarSide size={24} />
              <span>Com Garagem</span>
            </div>
          )}
        </div>
        <button className="bg-yellow-500 text-white w-full rounded-lg py-3 mt-2 uppercase text-lg font-semibold tracking-wide transition hover:bg-yellow-600 hover:scale-105">
          Saiba Mais
        </button>
      </div>
    </Link>
  );
};

export default EnterpriseProject;