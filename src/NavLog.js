import React from "react"
import { Link } from "react-router-dom";
import './style.css';

function NavLog(){

    return(

	<nav className="heading">
	
		{/* <ul class="log"> <a href="/login">Login</a> </ul> */}
		<ul className="log"> <a href="/logout">Logout</a></ul>
	        <ul className="log"> <a href="/login">Login</a> </ul>
		<ul className="log"> <a href="/signup">Signup</a> </ul>
	
		
		{/* <Link className = "links" to="/">Home </Link>
		<Link className = "links" to="/createNew">New Event</Link>	
		<Link className = "links" to="/list">Event Details</Link>
		<Link className = "links" to="/details">View Event Details</Link> */}
	</nav> 	

    );

        
    
}

export default NavLog;

