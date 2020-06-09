import React, { useState, useEffect } from "react";
import { getStory, getStoryIds } from "../services/hnApi";
import {
  StoryWrapper,
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
} from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url} target="_blank">
          <h1>{story.title}</h1>
        </a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="black">By:</StoryMetaElement>
          {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="black">Posted:</StoryMetaElement>{" "}
          {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
