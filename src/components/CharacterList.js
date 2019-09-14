import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Card, Image, Icon} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const id = useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.err("ERROR", err);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({character}) {
  return (
    <Card className='char-card'>
      <Image src={character.image} alt='character-pic' />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Description>Status: {character.status}</Card.Description>
        <Card.Description>Species: {character.species} {character.gender}</Card.Description>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
        <Card.Description>Current Location: {character.location.name}</Card.Description>
        <NavLink to='/episode'>
          <Icon name='video' />
          {character.episode.length} Episode{character.episode.length > 1 && 's'}
        </NavLink>
      </Card.Content>
    </Card>
  );
}
