import React from "react"
import Nav from "../Nav";
import Footer from "../Footer";


function Home(){

    return(

		<div>

			<div className="banner">
				<header className="text-center" role = "banner">
					<h1><img className="image" src="images/mango.jpg" alt="Header image"/>
						Group 5's Mango Weekly Planner
						<img className="image" src="images/mango.jpg" alt="Header image"/>
					</h1>
					<p>This page should be tried in safari, chrome or Mozila.</p>
				</header>
			</div>

			<div className="login">
				<form action="index.html">
					
					<label htmlFor="email">E-mail: </label>
					<input type="text" id="Email" name="email"></input>

					<input type="submit" value="Login"></input>

				</form>
			</div>

			<Nav/>

			<article  id="main-info">
				<section className="description text-center home">
					<h2>Welcome to Group 5's Weekly Planner!</h2>
					<p>
						Our Planner allows you to keep track of your weekly tasks and events. <br/>
						With this tool, never miss a doctor's appointment, class, or work meeting ever again! <br/>
						Login to begin adding to your planner
					</p>
				</section>

				<section className="function">
					<h2>How it works:</h2>
					<p>
						The "New Event" button allows you to add a event, task, or reminder to your planner. <br/>
						Assign each new event details such as a name, description, time and day, priority, etc. <br/>
					</p>
				</section>

				<section className="viewing">
					<h2>Viewing Events:</h2>
					<p>
						"Events Details" provides a weekly view of all your created events <br/>
						To expand the information for each event, click "View Event Details" to display all info!
					</p>
				</section>
			</article>

			<Footer/>


		</div>

    );
   
    
}

export default Home;

