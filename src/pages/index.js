import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'

import LoginPage from './login'
import EpisodesPage from './episodes'
import EpisodePage from './episodes/pages/episode'
import CharactersPage from './characters'
import CharacterPage from './characters/pages/character'
import StarshipPage from './starship'

export default () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/episodes" component={EpisodesPage} exact />
      <PrivateRoute path="/episode/:episodeId" component={EpisodePage} />
      <PrivateRoute path="/characters" component={CharactersPage} exact />
      <PrivateRoute path="/character/:characterId" component={CharacterPage} />
      <PrivateRoute path="/starship/:starshipId" component={StarshipPage} />
      <PrivateRoute
        path="/"
        exact
        component={() => <Redirect to="/episodes" />}
      />
    </Switch>
  )
}
