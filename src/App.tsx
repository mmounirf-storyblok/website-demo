import { isEditorMode } from "#lib/storyblok/params";
import EditorPreview from "#components/preview/EditorPreview";

function App() {
  // Editor mode: the Visual Editor loaded us with its preview params.
  if (isEditorMode()) {
    return <EditorPreview />;
  }

  // Manual/dashboard (self-service) mode comes later. For now, a placeholder + how to use.
  return (
    <main className="grid min-h-dvh place-items-center p-8 text-center">
      <div className="max-w-md space-y-3">
        <h1 className="text-xl font-semibold tracking-tight">Storyblok Editor Playground</h1>
        <p className="text-sm text-muted-foreground">
          This preview runs inside the Storyblok Visual Editor. In your space, set the Visual Editor
          location to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-foreground">
            {window.location.origin}
          </code>{" "}
          and open any story to inspect and edit it.
        </p>
      </div>
    </main>
  );
}

export default App;
