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
    <div className=''>
      <NavLink exact to='/'>
        <Icon />
        Home
      </NavLink>
      <NavLink to='/character'>
        <Icon />
        Characters
      </NavLink>
      <NavLink to='/location'>
        <Icon />
        Locations
      </NavLink>
      <NavLink to='/episode'>
        <Icon />
        Episodes
      </NavLink>
      <NavLink to='/search'>
        <Icon />
        Search
      </NavLink>
    </div>
  );
};
