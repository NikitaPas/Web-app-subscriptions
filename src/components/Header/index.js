import React from "react";
import Button from '@mui/material/Button';
import './header.css';
const Header = () => {
    return (
        <div className="header"><h1><a href="/">BeOnline</a>
        <a href = "/login"><Button className="button_in" variant="contained">Войти</Button></a></h1>
        
        
        </div>
    )
}
export default Header;