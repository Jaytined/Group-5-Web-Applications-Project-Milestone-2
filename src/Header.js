mport React from "react";
import './style.css'; 
import mango from './mango.jpg';
function Header(){
	return(
        <div className="banner">
				<header className="text-center" role = "banner">
					<h1><img className="image" src={mango} alt="Header image"/>
						Group 5's Mango Weekly Planner
						<img className="image" src={mango} alt="Header image"/>
					</h1>
					<p>This page should be tried in safari, chrome or Mozila.</p>
				</header>
		    </div>
	);
}
export default Header;
