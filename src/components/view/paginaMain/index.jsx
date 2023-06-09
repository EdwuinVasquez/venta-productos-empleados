//importacion de librerias
import { React, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { BotonSencillo } from "../botones/botonSencillo.jsx";
import { Logo } from "../logos/logo.jsx";
import { TituloCentradolo } from "../titulos/tituloCentrado.jsx";
import { SubtituloCentrado } from "../subtitulos/subtituloCentrado.jsx";
import '../../style/forms/inicioSesionForm.css'

export function Index() {
	useEffect (() =>{
		localStorage.removeItem("usuario");
	})
  return(
	<div className="contenedor--centrado">
		<form className="loginFomulario">
			<Logo></Logo>
			<TituloCentradolo texto="Rimoplasticas S.A"></TituloCentradolo>
			<SubtituloCentrado 
				texto="Bienvenido al catalogo de los empleados, antes de empezar ingrese a su cuenta"
				></SubtituloCentrado>
			<Link to="/login">
				<BotonSencillo texto="Ingresar" manejarClik={() => {console.log("b")}}></BotonSencillo>
			</Link>
			<Link to="/registro">
				<BotonSencillo texto="Registrarse" manejarClik={() => {console.log("a")}}></BotonSencillo>
			</Link>
		</form>
	</div>
	);
};