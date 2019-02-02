import React from "react";
import "../styles/Projects.css";
import Clickygame from "../images/ClickyGame.JPG";
import Friendsfinder from "../images/friends-finder.JPG";
import Bamazon from "../images/bamazon.jpg";

const Projects = () =>  (
    <div className = "container1">
      <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1 className="main">Portfolio</h1>
                </div>
            </div>
        </div>

<div class="row">
    <div className="column">
           <a href="https://clicky-organs-game.herokuapp.com/"><img src={Clickygame} alt="ClickyGame" /></a>
            <div className="caption">
                <h3>Clicky Game</h3>
            </div>
        </div>    


<div className="column">
        
                  <a href="https://snadeem-friends-finder.herokuapp.com/"><img class="friend" src={Friendsfinder}alt="friend" /></a>
                   <div className="caption">
                       <h3>Friends Finder</h3>
                   </div>
               </div>    

<div className="column">
        
    <a href="https://snadeem1.github.io/Bamazon/"><img class="bamazon" src={Bamazon}alt="bamazon" /></a>
            <div class="caption">
                <h3>Bamazon</h3>
            </div>
     </div>
    </div>
    </div>
)


export default Projects;