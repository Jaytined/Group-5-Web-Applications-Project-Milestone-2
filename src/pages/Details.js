import React from "react"
import Nav from "../Nav";
import Footer from "../Footer";


function Details(){

    return(

	<div>

<       div className="banner">
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

        
		
        
    <article>
        <section className="text-center viewDetail">
            <h1>Viewing Event Details</h1>
            <div className="viewEvent">
                Event Time: 2:00pm <br/>
                Event Name: Example Event 1<br/>
                Event Description: Info/details given about specific event <br/>
                Further Description: Viewing Specifc event details can display more information about the event <br/>
                that is not shown in the Weekly Planner view of the user's events <br/>
                Priority Event: Yes <br/>
            </div>
        </section>
    </article>

    <Footer/>		

	
    </div>
    );

        
    
}



export default Details;

