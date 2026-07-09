import type { ComponentProps, ReactNode } from "react";
import { Badge } from "#components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "#components/ui/tooltip";
import type { TooltipPositionerProps } from "@base-ui/react";

// A shadcn Badge that reveals a tooltip on hover. Exposes all Badge props
// (variant, className, children, …) plus the tooltip content and optional side.
export function TooltipBadge({
  tooltip,
  side,
  ...badgeProps
}: ComponentProps<typeof Badge> & {
  tooltip: ReactNode;
  side?: TooltipPositionerProps["side"];
}) {
  return (
    <Tooltip>
      <TooltipTrigger render={<Badge {...badgeProps} />} />
      <TooltipContent side={side}>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
