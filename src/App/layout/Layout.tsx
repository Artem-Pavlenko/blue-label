import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import LoginHeader from '../components/organizms/LoginHeader/LoginHeader'
import {pages} from '../routes/routes'


const Layout = () => {
    return (
        <BrowserRouter>
            <LoginHeader/>
            <Switch>
                {
                    pages.map(({path, Component}) =>
                        <Route exact key={path} path={path} component={Component}/>)
                }
                <Redirect from={"*"} to={"/"}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Layout
