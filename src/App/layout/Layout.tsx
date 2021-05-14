import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Header from '../components/organizms/Header/Header'
import {pages} from '../routes/routes'
import './Layout.scss'


const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='mainContainer'>
                <Switch>
                    {
                        pages.map(({path, Component}) =>
                            <Route exact key={path} path={path} component={Component}/>)
                    }
                    <Redirect from={"*"} to={"/"}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Layout
