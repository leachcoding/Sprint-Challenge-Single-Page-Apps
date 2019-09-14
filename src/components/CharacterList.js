import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Card, Image} from 'semantic-ui-react';

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
      <Card.Header>{character.name}</Card.Header>
      <p>Status: {character.status}</p>
    </Card>
  );
}
