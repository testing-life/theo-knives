import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <div data-theme="default">
      <StoryblokComponent blok={story.content} />;
    </div>
  );
}

export default App;
