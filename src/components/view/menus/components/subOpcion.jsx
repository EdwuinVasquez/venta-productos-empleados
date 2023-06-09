import React from "react";
import { Link } from "react-router-dom";
import "../../../style/menus/components/opcion.css";

export function SubOpcionMenu({nombre, ruta}) {
  return(
		<>
			<li className="lista__subOpciones">
				<Link to={ruta} className="opcion__link opcion__link--inside">{nombre}</Link>
      		</li>
		</>
	);
}