import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import RegisterProduct from './views/products/register'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={RegisterProduct} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}