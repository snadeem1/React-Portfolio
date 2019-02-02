import React from "react";
import "../styles/Projects.css";
import Clickygame from "../images/ClickyGame.JPG";
import Friendsfinder from "../images/friends-finder.JPG";
import Bamazon from "../images/bamazon.jpg";
import Burger from "../images/Burger.JPG";
import Pho from "../images/phoLogo.png";
import Train from "../images/train.JPG";
import Giphy from "../images/giphy.JPG";
import Trivia from "../images/Trivia.jpg";

const Projects = () =>  (
    <div className = "container1">
      <div className="row">
            
                <div className="page-header">
                    <h1 className="main">Portfolio</h1>
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

  <div className="column">

           <a href="https://create-your-burger.herokuapp.com/"><img class="Burger" src={Burger}alt="Burger" /></a>
            <div class="caption">
                <h3>Eat Da Burger</h3>
            </div>





    </div>
    </div>

<div className = "row">
 <div className="column">
           
           <a href="https://laraek.github.io/Pho-Finder/"><img class="Pho" src={Pho}alt="Pho" /></a>
            <div class="caption">
                <h3>Pho Finder</h3>
            </div>
</div>

<div class="column">
            <a href="https://snadeem1.github.io/Train-Timings/"><img class="train" src={Train}alt="train" /></a>
           <div class="caption">
                <h3>Train Tracker</h3>
            </div>
</div>

  <div class="column">
             <a href="https://snadeem1.github.io/Giphy/"><img class="giphy" src= {Giphy}alt="giphy"/></a>
            <div class="caption">
                <h3>Gif API</h3>
            </div>
</div>

  <div class="column">
            <a href="https://snadeem1.github.io/Trivia-Game/"><img class= "Trivia" src={Trivia}alt="Trivia" /></a>
                <div class="caption">
                     <h3>Trivia Game</h3>
                </div>

</div>
    </div>
    </div>
    
)


export default Projects;