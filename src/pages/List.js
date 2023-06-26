import React from "react"
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";


function List(){

    return(

	<div>

	<Header/>

        <div className="login">
            <form action="index.html">
                
                <label htmlFor="email">E-mail: </label>
                <input type="text" id="Email" name="email"></input>

                <input type="submit" value="Login"></input>

            </form>
        </div>


        <Nav/>

        
		
        <article>
        <section className="details">
           
            <ul className="list">
                <li> 
                    <div className="day">Monday</div>
                    
                </li>
                <li>
                    <div className="day">Tuesday</div>

                </li>
                <li>
                    <div className="day">Wednesday</div>

                    <div className="event">
                        Wed. 2:00pm <br/>
                        Example Event 1<br/>
                        <span>Event Description:</span> Info/details given about specific event <br/>
                        <span>Priority Event:</span> Yes <br/>

                        <button onclick="window.location.href = 'detail.html';">View</button>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                    <div className="event">
                        Wed. 3:00pm <br/>
                        Example Event 2<br/>
                        <span>Event Description:</span> Info/details given about specific event <br/>
                        <span>Priority Event:</span> No <br/>

                        <button onclick="window.location.href = 'detail.html';">View</button>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div className="day">Thursday</div>

                </li>
                <li>
                    <div className="day">Friday</div>

                </li>
                <li>
                    <div className="day">Saturday</div>
                    
                    <div className="event">
                        Sat. 11:00am <br/>
                        Example Event 3<br/>
                        <span>Event Description:</span> Info/details given about specific event <br/>
                        <span>Priority Event:</span> No <br/>

                        <button onclick="window.location.href = 'detail.html';">View</button>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div className="day">Sunday</div>

                </li>
            </ul>

        </section>
    </article>

    <Footer/>
		

	
    </div>
    );

        
    
}



export default List;

