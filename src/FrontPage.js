import React from "react";
import NavBar from "./Navbar";
import Content from "./Main"
import ImagePage from "./ImagePage";


function FrontPage(){
    return(
        <div >
            <NavBar /> 
            <Content />
            <ImagePage />
        </div>
    )
}

export default FrontPage;