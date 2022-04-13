import React from "react";
import { Link } from "react-router-dom";


export default class Welcome extends React.Component {

	render() {

		return (



			<div>


				
				<center><img src="../../images/icon.jpeg" alt="centered image" height="500" width="1200"></img>
			 </center>
			 <br></br>
			 <center>	<Link style={{fontSize:30}} padding="1000px" to={"/signin"}>Sign in</Link>
			
			 </center>

			</div>
		);
	}
}

