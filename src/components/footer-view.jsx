import github from "./images/github-svgrepo-com.svg";
import linkedin from "./images/linkedin-svgrepo-com.svg";

export const FooterView = () => {
    return (
        <div className="footer">
            <a href="#" target="_blank" className="footerItem"><img src={github} height="50px"></img></a>
            <a href="#" target="_blank" className="footerItem"><img src={linkedin} height="50px"></img></a>
        </div>
    )
}