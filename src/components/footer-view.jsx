import github from "./images/github-svgrepo-com.svg";
import linkedin from "./images/linkedin-svgrepo-com.svg";

export const FooterView = () => {
    return (
        <div className="footer">
            <a href="https://github.com/SethSingletary" target="_blank" className="footerItem"><img src={github} height="50px"></img></a>
            <a href="https://www.linkedin.com/in/seth-singletary" target="_blank" className="footerItem"><img src={linkedin} height="50px"></img></a>
        </div>
    )
}