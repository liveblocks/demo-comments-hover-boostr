import { ColumnType } from "@/components/site/database";
import { Composer, Thread } from "@liveblocks/react-ui";
import styles from "./InlineThread.module.css";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { Button } from "@/components/comments/Button";
import { useMemo, useState } from "react";
import { ThreadData } from "@liveblocks/client";
import { useUser, useThreads } from "@liveblocks/react/suspense";
import { Avatar } from "@/components/comments/ToolbarAvatars";

export function InlineThread({
  rowId,
  columnType,
}: {
  rowId: string;
  columnType: ColumnType;
}) {
  const { threads } = useThreads({
    query: {
      metadata: { rowId, columnType },
    },
  });

  if (threads.length === 0) {
    return <NewThreadComposer rowId={rowId} columnType={columnType} />;
  }

  return <ThreadList thread={threads[0]} />;
}

function ThreadList({ thread }: { thread: ThreadData }) {
  // Open threads that have just been created
  const startMinimized = useMemo(() => {
    return Number(new Date()) - Number(new Date(thread.createdAt)) > 100;
  }, [thread]);

  const [open, setOpen] = useState(!startMinimized);
  const { user } = useUser(thread.comments[0].userId);

  return (
    <span className={styles.ComposerWrapper}>
      <button onClick={() => setOpen(!open)} className={styles.AvatarButton}>
        <Avatar src={user.avatar} name={user.name} />
      </button>
      {open ? <Thread className={styles.Thread} thread={thread} /> : null}
    </span>
  );
}

function NewThreadComposer({
  rowId,
  columnType,
}: {
  rowId: string;
  columnType: ColumnType;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className={styles.ComposerWrapper}>
      <Button
        onClick={() => setOpen(!open)}
        className={styles.ButtonComment}
        variant="ghost"
        square
      >
        <PlusIcon width={16} height={16} />
      </Button>
      {open ? (
        <Composer
          className={styles.Composer}
          metadata={{ rowId, columnType }}
        />
      ) : null}
    </span>
  );
}
