import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'semantic-ui-react';

export default function EpisodeList(props) {
  console.log(props);

  const [episodes, setEpisode] = useState([]);

  const id = useEffect(() => {
    const getEpisode = () => {
      axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          console.log(res);
          setEpisode(res.data.results);
        })
        .catch(err => {
          console.err('ERROR', err);
        })
    }
    getEpisode();
  }, []);

  return (
    <div className='episode-list grid-view'>
      {episodes.map(episode => (
        <EpisodeDetails key={episode.id} episode={episode} />
      ))}
    </div>
  );
}

function EpisodeDetails({episode}) {
  return (
    <Card className='episode-card'>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Description>Air Date: {episode.air_date}</Card.Description>
        <Card.Description>{episode.episode}</Card.Description>
        <Card.Description>Creation Date: {episode.created}</Card.Description>
        <Card.Description>Number of Characters in Episode: {episode.characters.length}</Card.Description>
      </Card.Content>
    </Card>
  );
}
