import React, { useState, useEffect } from 'react';
import { getStory, getStoryIds } from '../services/hnApi';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <a href={story.url} target='_blank'>
        <p>{story.title}</p>
      </a>
      By: <p>{story.by}</p>
      Posted <p>{story.time}</p>
    </>
  ) : null;
};
