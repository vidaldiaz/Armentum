import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import NewProject from './pages/NewProject'
import ManageProject from './pages/ManageProject'
import NewTeam from './pages/NewTeam'
import AllTeams from './pages/AllTeams'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project/new" component={NewProject} />
        <Route exact path="/project/:id" component={ManageProject} />
        <Route exact path="/team/new" component={NewTeam} />
        <Route exact path="/team/all" component={AllTeams} />
      </Switch>
    </BrowserRouter>
  )
}
