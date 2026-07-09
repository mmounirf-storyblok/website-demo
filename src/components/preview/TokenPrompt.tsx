import { useState } from "react";
import { Input } from "#components/ui/input";
import { Button } from "#components/ui/button";

// Prompts for a space's delivery token (the editor's URL token is unusable), with
// guidance on where to get it and which type to use. Stored per space locally.
export function TokenPrompt({
  spaceId,
  isPublished,
  onSubmit,
}: {
  spaceId: string;
  isPublished: boolean;
  onSubmit: (token: string) => void;
}) {
  const [token, setToken] = useState("");
  const settingsUrl = `https://app.storyblok.com/#/me/spaces/${spaceId}/settings?tab=api`;
  const recommended = isPublished ? "Public" : "Preview";

  return (
    <form
      className="space-y-3 rounded-lg border bg-card p-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (token.trim()) onSubmit(token.trim());
      }}
    >
      <div className="space-y-1.5">
        <h2 className="text-sm font-medium">Add an access token for space {spaceId}</h2>
        <p className="text-xs text-muted-foreground">
          Get it from your{" "}
          <a
            href={settingsUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-2"
          >
            space Settings → Access Tokens
          </a>
          .
        </p>
        <p className="text-xs text-muted-foreground">
          Use a <b className="text-foreground">{recommended}</b> token — <b>preview</b> tokens read
          the <b>draft</b> version, <b>public</b> tokens read the <b>published</b> version; both are
          read-only.{" "}
          <a
            href="https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/authentication"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-2"
          >
            Learn more
          </a>
          .
        </p>
        <p className="text-[11px] text-muted-foreground/80">
          Saved in this browser's local storage for this space.
        </p>
      </div>
      <div className="flex gap-2">
        <Input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder={`${recommended} access token`}
          autoFocus
        />
        <Button type="submit" disabled={!token.trim()}>
          Load
        </Button>
      </div>
    </form>
  );
}
