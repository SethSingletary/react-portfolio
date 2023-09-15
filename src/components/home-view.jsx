import { NavigationView } from "./navigation-view";
import profile from './images/profile.png';

export const HomeView = () => {
    return(
        <div>
            <NavigationView/>
            <div>
                <img src={profile} alt="A photo of me" height="auto" width="30%"></img>
                <h1>Seth Singletary, Web Developer</h1>
            </div>
            <div>
                <p>
                    Hello! My name is Seth Singletary and I am currently studying to be a fullstack software developer! I've from Michigan, born and raised.
                    <br/>I love to go on walks and hikes, as well as learn more about anything I'm passionate about.
                    <br/>My intrestes include, Artificial Intelligence, Machine learning, Blockchain and general automation.
                    <br/>My fiance and I love to explore, and we are always happy to try something new!
                </p>
            </div>
        </div>
    )
}