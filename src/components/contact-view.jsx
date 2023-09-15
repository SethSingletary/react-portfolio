import { Button } from "react-bootstrap"
import { NavigationView } from "./navigation-view"

export const ContactView = () => {
    return(
        <div>
            <NavigationView/>
            <div>I am currently based in Okemos, Michigan.</div>
            <div>To get in contact with me, please send me an email at singletaryseth8gmail.com or click below.</div>
            <div>
                Phone: <a href="tel:5178998659">517-899-8659</a><br></br>
                Email: <a href="mailto:singletaryseth8@gmail.com">singletaryseth8@gmail.com</a>
            </div>
        </div>
    )
}