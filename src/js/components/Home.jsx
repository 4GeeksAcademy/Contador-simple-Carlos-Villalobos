import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Segundero from "./segundero.jsx";
//create your first component


const Home = () => {
	return (
		<div className="container d-flex bg-dark text-center">
			<div>
			<Segundero inicio={0} lapso={1000} />
			</div>
			<div>
			<Segundero inicio={0} lapso={60000} />
			</div>
			
        
		</div>
	);
};

export default Home;