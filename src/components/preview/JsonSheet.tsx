import type { MouseEvent } from "react";
import JsonView from "@uiw/react-json-view";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "#components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "#components/ui/tabs";
import type { Blok } from "#lib/storyblok/blok";
import { BracketsCurlyIcon, TreeViewIcon } from "@phosphor-icons/react";

// Select the whole raw JSON so the user can copy it natively (⌘/Ctrl+C). This is
// plain DOM text selection — not the Clipboard API — so it works inside the
// editor iframe where programmatic clipboard writes are policy-blocked.
function selectAll(e: MouseEvent<HTMLElement>) {
  const range = document.createRange();
  range.selectNodeContents(e.currentTarget);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

// Inspector drawer: a collapsible tree for exploring, and a raw view for copying.
export default function JsonSheet({
  blok,
  onOpenChange,
}: {
  blok: Blok | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={blok !== null} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-lg">
        <Tabs defaultValue="tree" className="flex min-h-0 flex-1 flex-col gap-0">
          <SheetHeader className="gap-3 border-b p-4">
            <SheetTitle className="font-mono">{blok?.component ?? "Blok"}</SheetTitle>
          </SheetHeader>
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="tree">
              <TreeViewIcon /> Tree
            </TabsTrigger>
            <TabsTrigger value="raw">
              <BracketsCurlyIcon /> Raw
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tree" className="min-h-0 flex-1 overflow-auto p-4 text-[13px]">
            {blok && (
              <JsonView
                value={blok}
                shortenTextAfterLength={0}
                displayDataTypes={false}
                enableClipboard={false}
              />
            )}
          </TabsContent>

          <TabsContent value="raw" className="min-h-0 flex-1 space-y-2 overflow-auto p-4">
            {blok && (
              <pre
                onClick={selectAll}
                className="cursor-text font-mono text-xs break-words whitespace-pre-wrap select-text"
              >
                {JSON.stringify(blok, null, 2)}
              </pre>
            )}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
