"use client";

import { Button } from "./button";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Sidebar } from "@/components/comments/sidebar";
import { ToolbarAvatars } from "@/components/comments/toolbaravatars";
import { SidebarIcon } from "@/components/icons/sidebaricon";
import styles from "./toolbar.module.css";
import sidebarStyles from "./sidebar.module.css";

export function Toolbar({ ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      {...props}
      data-hide-cursors
    >
      <div className={styles.toolbar}>
        <ToolbarAvatars />
        <div className={styles.toolbarSeparator} />
        <div className={styles.toolbarActions}>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" square>
              <SidebarIcon
                style={{ opacity: open ? "0.7" : "1" }}
                width={12}
                height={12}
              />
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>
      <Collapsible.Content className={sidebarStyles.sidebar}>
        <Sidebar onClose={() => setOpen(false)} />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
