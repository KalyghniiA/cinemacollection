import Navigation from "../components/navigation/navigation.tsx";
import Header from "../components/header/header.tsx";
import Logo from "../components/logo/logo.tsx";
import {Outlet} from "react-router-dom";
import Body from "../components/body/body.tsx";

export function Layout() {


    return (
        <>
            <Header>
                <Logo/>
                <Navigation favoriteCount={0}/>
            </Header>
            <Body>
                <Outlet />
            </Body>
        </>
    )
}