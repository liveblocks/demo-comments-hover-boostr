"use client";

import { Button } from "./Button";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Sidebar } from "@/components/comments/Sidebar";
import { ToolbarAvatars } from "@/components/comments/ToolbarAvatars";
import { SidebarIcon } from "@/components/icons/SidebarIcon";
import styles from "./Toolbar.module.css";
import sidebarStyles from "./Sidebar.module.css";

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
