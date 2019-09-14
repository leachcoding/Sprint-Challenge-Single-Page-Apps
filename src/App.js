import React from "react";
import {Route} from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import EpisodeList from './components/EpisodeList.js';
import LocationsList from './components/LocationsList.js';
{/* import SearchForm from './components/SearchForm.js'; */}

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/character' component={CharacterList} />
      <Route path='/episode' component={EpisodeList} />
      <Route path='/location' component={LocationsList} />
      {/* <Route path='/search' component={SearchForm} /> */}
    </main>
  );
}
