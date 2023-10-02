import { NavigationView } from "./navigation-view";
import { FooterView } from "./footer-view";
import meet from './images/meet-app.png';
import myFlix from './images/myFlix.png';

export const WorkView = () => {
    return(
        <div>
            <NavigationView/>
            <div className="grid">
                <div className="grid-item">
                    <h2><a href="https://sethsingletary.github.io/meet/" target="_blank">Meet App</a></h2>
                    <img src={meet} height="250px" alt="Meet App Picture"></img>
                    <p>
                        Meet allows you to see upcoming events from CareerFoundry all over the world. 
                        For this project, I used googleapis, aws lambda and scopes.
                    </p>
                    <a href="https://github.com/SethSingletary/meet" target="_blank">See code on Github</a>
                </div>
                <div className="grid-item">
                    <h2><a href="https://resonant-cassata-933e3a.netlify.app/" target="_blank">React myFlix App</a></h2>
                    <img src={myFlix} height="250px" alt="React myFlix Picture"></img>
                    <p>
                    React myFlix displays a set of movies from a database that I created, allowing users to log in, register, and add movies to their favorites. 
                    While it is slightly clumbersome, given that it was my first Full Stack application, it show cases my knowledge of creating endpoints, database managment and building a single page react application. 
                    You can see the backend code <a href="https://github.com/SethSingletary/myFlix" target="_blank">here</a>
                    </p>
                    <a href="https://github.com/SethSingletary/myFlix-client" target="_blank">See code on Github</a>
                </div>
                {/**
                 *                 <div className="grid-item">
                    <h2><a href="#" target="_blank">Todo List App</a></h2>
                    <img height="250px" alt="Todo App Picture"></img>
                    <p>Enter info about the app here</p>
                    <a href="#" target="_blank">See code on Github</a>
                </div>
                <div className="grid-item">
                    <h2><a href="#" target="_blank">React Blog</a></h2>
                    <img height="250px" alt="Blog Picture"></img>
                    <p>Enter info about the blog here</p>
                    <a href="#" target="_blank">See code on Github</a>
                </div>
                <div className="grid-item">
                    <h2><a href="" target="_blank">Angular myFlix App</a></h2>
                    <img height="250px" alt="Angular myFlix Picture"></img>
                    <p>Enter info about the app here</p>
                    <a href="#" target="_blank">See code on Github</a>
                </div>
                 */}
            </div>
            <FooterView/>
        </div>
    )
}