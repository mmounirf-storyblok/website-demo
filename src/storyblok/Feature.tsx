import type { Feature } from "./types/293691708305852/storyblok-components";

export default function Feature({ blok }: { blok: Feature }) {
  return (
    <div className="feature">
      <span>{blok.name}</span>
    </div>
  );
}
