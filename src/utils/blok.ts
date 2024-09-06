import { ISbStoryData, SbBlokData } from '@storyblok/react';

export const getComponent = (
  story: ISbStoryData,
  component: string,
  returnArray?: boolean
) => {
  if (!story || !component) {
    return null;
  }
  const body = story.content.body;
  const componentResult = body?.filter(
    (blok: SbBlokData) => blok.component === component
  );

  return returnArray ? componentResult : componentResult[0];
};
