import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews.js"
// Need to think about Navbar

export const PokePlanner = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("token")) {
                return <>
                    <Route>
                        {/* <NavBar /> */}
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
