import React from "react"
import { Link } from "react-router-dom";
import './style.css';

function Nav(){

    return(

	<nav className="heading">
		<ul className="main"> <a href="/">Home</a> </ul>
		<ul className="main"> <a href="/createNew">New Event</a> </ul>
		<ul className="main"> <a href="/list">Event Details</a> </ul>
		<ul className="main"> <a href="/details">View Event Details</a> </ul>
	
		{/* <ul class="log"> <a href="/login">Login</a> </ul>
		<ul class="log"> <a href="/signup">Signup</a> </ul> */}
	
		
		{/* <Link className = "links" to="/">Home </Link>
		<Link className = "links" to="/createNew">New Event</Link>	
		<Link className = "links" to="/list">Event Details</Link>
		<Link className = "links" to="/details">View Event Details</Link> */}
	</nav> 	

    );

        
    
}

export default Nav;

