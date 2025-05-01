
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Segundero from "./segundero.jsx";
//create your first component

const Home = () => {
	return (
		<div className="row bg-dark text-center">
			<div className="col-xl-2 col-md-12">
				<div className="container cuadro mb-3">
				<i className="cuadro fa-solid fa-clock"></i>
				</div>
			</div>

			<div className="col-xl-2 col-md-12"><Segundero inicio={0} lapso={10000000}  /></div>
			<div className="col-xl-2 col-md-12"><Segundero inicio={0} lapso={1000000}  /></div>
			<div className="col-xl-2 col-md-12"><Segundero inicio={0} lapso={100000}  /></div>
			<div className="col-xl-2 col-md-12"><Segundero inicio={0} lapso={10000}  /></div>
			<div className="col-xl-2 col-md-12"><Segundero inicio={0} lapso={1000}  /></div>

			{/* Comento esto porque use los hooks
			<div className="inputs col-12">
			<div className="input-group">
				<select className="custom-select" id="selector">
					<option value="normal">Cuenta normal</option>
					<option value="regresiva">Cuenta regresiva</option>
				</select>
			</div>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
				</div>
				<input type="text" className="form-control" placeholder="Elige un numero de inicio" id="numeroInicio"/>
			</div>
		</div> */}
		</div>
	);
};

export default Home;