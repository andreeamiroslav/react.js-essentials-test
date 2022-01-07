import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About(){
    return (
        <div>
            <h1>[About]</h1>
            <Outlet /> {/*router outlet*/}
        </div>
    )
}

export function Services(){
    return (
        <div>
            <h2>Our services</h2>
        </div>
    )
}

export function CompanyHistory(){
    return (
        <div>
            <h2>Our company history</h2>
        </div>
    )
}

export function Location(){
    return (
        <div>
            <h2>Our location</h2>
        </div>
    )
}

export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact(){
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation() //returns current location
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}