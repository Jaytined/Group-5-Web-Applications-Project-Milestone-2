import React from "react"
import Nav from "../Nav";
import NavLog from "../NavLog";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import {data} from '../data/data'


const List = (props) => {

    const navigate = useNavigate();
    const navigating = () => {
        navigate('/details');
    }

    return(

	<div>

	    <Header/>

        <NavLog/>

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
                        {data.map((events,key)=>{
                            // return <p key={key}>{events.time}<br/>{events.name}</p>;
                        }
                        )}
                        Wed. 2:00pm <br/>
                        Example Event 1<br/>
                        <span>Event Description:</span> Info/details given about event <br/>
                        <span>Priority Event:</span> Yes <br/>

                        <button onClick={navigating}>View</button>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                    <div className="event">
                        Wed. 3:00pm <br/>
                        Example Event 2<br/>
                        <span>Event Description:</span> Info/details given about event <br/>
                        <span>Priority Event:</span> No <br/>

                        <button onClick={navigating}>View</button>
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
                        <span>Event Description:</span> Info/details given about event <br/>
                        <span>Priority Event:</span> No <br/>

                        <button onClick={navigating}>View</button>
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

