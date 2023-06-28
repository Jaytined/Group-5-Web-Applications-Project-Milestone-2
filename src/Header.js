import './style.css'; 
import mango from './pages/images/mango.jpg'

function Header(){
	return(
        <div className="banner">
				<header className="text-center" role = "banner">
					<h1><img className="image" src={mango} alt="Header image"/>
						Mango Weekly Planner
						<img className="image" src={mango} alt="Header image"/>
					</h1>
					<p>This page should be tried in safari, chrome or Mozila.</p>
				</header>
		    </div>
	);
}
export default Header;