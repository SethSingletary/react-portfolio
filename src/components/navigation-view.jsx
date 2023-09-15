import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export const NavigationView = () => {
    const navigate = useNavigate();

    function handleHome(){
        navigate('/');
        window.location.reload();
    }
    function handleAboutMe(){
        navigate('/about');
        window.location.reload();
    }
    function handleContact(){
        navigate('/contact');
        window.location.reload();
    }
    function handleWork(){
        navigate('/work');
        window.location.reload();
    }

    return (
        <div>
            <ul>
                <li><Button onClick={handleHome}>Home</Button></li>
                <li><Button onClick={handleContact}>Contact</Button></li>
                <li><Button onClick={handleWork}>My work</Button></li>
            </ul>
        </div>
    )
    //  <li><Button onClick={handleAboutMe}>About me</Button></li>
}