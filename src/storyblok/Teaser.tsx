import type { Teaser } from "./types/293691708305852/storyblok-components";

export default function Teaser({ blok }: { blok: Teaser }) {
  return (
    <div className="teaser">
      <h2>{blok.headline}</h2>
    </div>
  );
}
