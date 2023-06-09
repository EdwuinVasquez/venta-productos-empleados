//importacion de librerias
import { React, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GoLock } from "react-icons/go";
import '../../style/inputs/inputIcono.css';

export function CampoIcono({id, titulo, icono, tipo, manejarCambio}) {
	const value = (event) =>{
    let value = event.target.value;
    manejarCambio(value.trim(), id);
  }

	const iconoHtml = (key) => {
		switch (key) {
			case "AiOutlineUser":
				return <AiOutlineUser className="campoIcono__icono" />
			case "GoLock":
				return <GoLock className="campoIcono__icono" />
			default:
				break;
		}
	}

  return(
		<div className="campoIcono">
			<label className="campoIcono__titulo">{titulo}</label>
			{iconoHtml(icono)}
			<input className="campoIcono__input" onChange={value} placeholder="" title="" autoComplete="off" type={tipo} ></input>
		</div>
	);
};