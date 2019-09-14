import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

  return (
    <div className='ui attached tabular menu'>
      <NavLink exact to='/' className='item'>
        <Icon name='home'/>
        Home
      </NavLink>
      <NavLink to='/character' className='item'>
        <Icon name='users'/>
        Characters
      </NavLink>
      <NavLink to='/location' className='item'>
        <Icon name='map outline'/>
        Locations
      </NavLink>
      <NavLink to='/episode' className='item'>
        <Icon name='video'/>
        Episodes
      </NavLink>
      <NavLink to='/search' className='item'>
        <Icon name='search'/>
        Search
      </NavLink>
    </div>
  );
};
