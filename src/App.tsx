import { StoryblokComponent, storyblokEditable, useStoryblok } from "@storyblok/react";
import type { Page } from "./storyblok/types/293691708305852/storyblok-components";

function App() {
  const story = useStoryblok("home", {
    version: "draft",
  });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  const content = story.content as Page;

  return (
    <main {...storyblokEditable(story.content)}>
      {content.body?.map((nestedBlok, index) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid || index} />
      ))}
    </main>
  );
}

export default App;
