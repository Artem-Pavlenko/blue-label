import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Header from '../components/organizms/Header/Header'
import {pages} from '../routes/routes'


const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
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
