import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story';

import { getStoryIds, getStory } from '../services/hnApi';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    getStory('23438111').then(data => console.log(data));
  }, []);

  return storyIds.map(storyId => {
    console.log(storyId);
    return <Story storyId={storyId} key={storyId} />;
  });
};
