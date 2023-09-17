import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationView } from "./navigation-view";
import { HomeView} from "./home-view";
import { ContactView } from "./contact-view";
import { WorkView } from "./work-view";

export const MainView = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                path='/'
                element={
                    <>
                        <HomeView/>
                    </>
                }
                />
                <Route
                path='/contact'
                element={
                    <>
                        <ContactView/>
                    </>
                }
                />
                <Route
                path='/work'
                element={
                    <>
                        <WorkView/>
                    </>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}
