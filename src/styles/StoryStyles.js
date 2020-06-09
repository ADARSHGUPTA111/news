import styled from "styled-components";

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  text-decoration: none;
  padding: 20px 0px;
  a {
    color: purple;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;
  > span:not(:first-child):before {
    content: ".";
    margin: 0px 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || "red"};
`;
