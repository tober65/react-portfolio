import React from "react";
import beerfavsImage from "../assets/images/beerfavs.png";
import marvelMatchImage from "../assets/images/marvel-match.png";
import quizImage from "../assets/images/quiz.png";
import passwordGeneratorImage from "../assets/images/password_generator.png";
import weatherImage from "../assets/images/weather-dashboard.png";
import workdayImage from "../assets/images/work_day_scheduler_demo.png";

const quizStyle ={
    maxWidth: "501px"
}

const passwordGenStyle = {
    maxWidth: "879px"
}

const Portfoliopage = () => {
    return (<div class="container">
        <div class="card">
            <h3>Brew Favs</h3>
            <img src={beerfavsImage} alt="Beer favs" />
            <p>GitHub: <a href="https://github.com/chrisgshred/brewFavs">https://github.com/chrisgshred/brewFavs</a>
            </p>
            <p>Deployed Project: <a href="https://brewfavs.herokuapp.com/user">https://brewfavs.herokuapp.com/user</a>
            </p>
            <p>● An app to find and save favorite beers and breweries</p>
            <p>● I was in a team of 4 people. I was focused on database integration, connecting the front and back ends,
            and
                displaying brewery locations on Google Maps</p>
            <p>● Used Javascript, Sequelize, jQuery, Node, Express, Google Maps</p>
        </div>

        <div class="card">
            <h3>Javascript Quiz</h3>
            <img src={quizImage} style={quizStyle} alt="Javascript Quiz"/>
            <p>GitHub: <a
                href="https://github.com/tober65/Javascript-Quiz">https://github.com/tober65/Javascript-Quiz</a>
            </p>
            <p>Deployed Project: <a
                href="https://tober65.github.io/Javascript-Quiz">https://tober65.github.io/Javascript-Quiz</a></p>
            <p>● A quiz about basic Javascript concepts written in Javascript</p>
            <p>● I was the sole developer.</p>
            <p>● Used HTML, CSS, and Javascript</p>
        </div>

        <div class="card">
            <h3>Weather Dashboard</h3>
            <img src={weatherImage} alt="Weather Dashboard" />
            <p> GitHub: <a
                href="https://github.com/tober65/Weather-Dashboard">https://github.com/tober65/Weather-Dashboard</a>
            </p>
            <p>Deployed Project: <a
                href="https://tober65.github.io/Weather-Dashboard">https://tober65.github.io/Weather-Dashboard</a>
            </p>
            <p>● A dashboard to get current weather in a city plus a five-day forecast</p>
            <p>● I was the sole developer.</p>
            <p>● Used HTML, CSS, and Javascript</p>
        </div>

        <div class="card">
            <h3>Marvel Match</h3>
            <img src={marvelMatchImage} alt="Marvel Match"/>
            <p>GitHub: <a
                href="https://github.com/jessicablank/marvel-match">https://github.com/jessicablank/marvel-match</a>
            </p>
            <p>Deployed Project: <a
                href="https://jessicablank.github.io/marvel-match">https://jessicablank.github.io/marvel-match</a>
            </p>
            <p>● A dating quiz for Marvel characters</p>
            <p>● I was in a team of 3 people. I focused mostly on API use and some backend logic.</p>
            <p>● Used HTML, CSS, and Javascript</p>
        </div>

        <div class="card">
            <h3>Workday Scheduler</h3>
            <img src={workdayImage} alt="Workday Scheduler" />
            <p> GitHub: <a
                href="https://github.com/tober65/Work-Day-Scheduler">https://github.com/tober65/Work-Day-Scheduler</a>
            </p>
            <p>Deployed Project: <a
                href="https://tober65.github.io/Work-Day-Scheduler/">https://tober65.github.io/Work-Day-Scheduler/</a>
            </p>
            <p>● A day planner</p>
            <p>● I was the sole developer.</p>
            <p>● Used HTML, CSS, and Javascript</p>
        </div>

        <div class="card">
            <h3>Password Generator</h3>
            <img src={passwordGeneratorImage} alt="Password Generator" style={passwordGenStyle}/>
            <p> GitHub: <a
                href="https://github.com/tober65/Password-Generator">https://github.com/tober65/Password-Generator</a>
            </p>
            <p>Deployed Project: <a
                href="https://tober65.github.io/Password-Generator/">https://tober65.github.io/Password-Generator/</a>
            </p>
            <p>● A password generator</p>
            <p>● I was the sole developer.</p>
            <p>● Used HTML, CSS, and Javascript</p>
        </div>
    </div>)
}

export default Portfoliopage;