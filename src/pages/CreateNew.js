import React from "react"
import Nav from "../Nav";
import NavLog from "../NavLog";
import Footer from "../Footer";
import Header from "../Header";

function CreateNew(){

    return(

        <div>

            <Header/>

            <NavLog/>

            <Nav/>

            
            <article>
                <section className="text-center form">
                    <h1>Create New Event</h1>
                    <form action="list.html" method="get">
                        <label htmlFor="name">Event Name:</label><br/>
                        <input type="text" id="name" name="name"/><br/>

                        <label htmlFor="message">Event Description:</label><br/>
                        <textarea id="message" name="message" rows="3" cols="40"></textarea> <br/>

                        <label htmlFor="days">Select Day:</label><br/>
                        <select name="days" id="days">
                            <option value="blank">Select Day:</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select> <br/> 

                        <input type="checkbox" id="check" name="check" value="Check"/>
                        <label htmlFor="check">Mark as high priority</label><br/>

                        <input type="submit" value="Add Event"/>
                    </form>

                </section>
            </article>

            <Footer/>

        </div>
    );

          
}


export default CreateNew;
