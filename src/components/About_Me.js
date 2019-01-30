import React from "react";
import "../styles/About_Me.css";
import Mypic from "../images/mypic.jpg";

const About_Me = () =>  (
    <div className = "container">

    <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1 className="main">About Me</h1>
                </div>

                   <div className="row">
                    <div className="col-md-2">
                    <img src={Mypic}/>
                    
                    <div className="col-md-10">
                        <p>My name is Sitwat Nadeem. I am from Fredericksburg, Virginia area.
                                I did Full Stack Web Development from George Washington University, which included
                                HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL, and more.
                                
                        </p>
                        <p>I am interested in the technology and how it is changing the world and plays a role in every field.
                                I am a hard working and a creative person and I really enjoy building software applications where I can use my creativity. 
                       

                        </p>
                    </div>

                     <div className="row">
                    <div className="col-md-12">
                        <p className="p3">My goal is to develop many new software by using my creative ideas. 
                        I want to develop software for healthcare, government, social media and many different fields.                
                        </p>

                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>


    </div>
)

export default About_Me;
