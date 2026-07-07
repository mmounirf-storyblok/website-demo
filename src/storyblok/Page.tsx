import { StoryblokComponent } from "@storyblok/react";
import type { Page } from "./types/293691708305852/storyblok-components";

export default function Page({ blok }: { blok: Page }) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
