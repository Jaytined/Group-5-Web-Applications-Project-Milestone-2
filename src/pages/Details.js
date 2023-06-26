import React from "react"
import Nav from "../Nav";
import NavLog from "../NavLog";
import Footer from "../Footer";
import Header from "../Header";


function Details(){

    return(

	<div>

        <Header/>

        <NavLog/>

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
