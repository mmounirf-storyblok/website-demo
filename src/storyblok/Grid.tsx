import { StoryblokComponent } from "@storyblok/react";
import type { Grid } from "./types/293691708305852/storyblok-components";

export default function Grid({ blok }: { blok: Grid }) {
  if (!blok.columns) return;
  return (
    <div className="grid">
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
