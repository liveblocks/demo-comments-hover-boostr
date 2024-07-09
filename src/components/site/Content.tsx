"use client";

import styles from "./Content.module.css";
import { ROWS } from "@/components/site/database";
import { InlineThread } from "@/components/comments/InlineThread";
import { useThreads } from "@liveblocks/react";
import { ErrorBoundary } from "react-error-boundary";

const dollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Content() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>Dashboard</h1>
      <div className={styles.TableContainer}>
        <div className={styles.TableHeader}>
          <span>Activity</span>
          <span className={styles.TableRightAligned}>Average spend</span>
          <span className={styles.TableRightAligned}>Open pipeline</span>
        </div>
        {/* Content */}
        <ErrorBoundary fallback={<div>Error rendering threads</div>}>
          <Rows />
        </ErrorBoundary>
      </div>
    </div>
  );
}

function Rows() {
  const { threads, isLoading, error } = useThreads();

  if (error) {
    return <div>Problem loading rows</div>;
  }

  return (
    <div>
      {ROWS.map(({ id, data }) => (
        <div className={styles.TableRow} key={id}>
          <span className={styles.TableLink}>
            <a href={data.activity}>Activity</a>
            <InlineThread
              isLoading={isLoading}
              threads={threads || []}
              rowId={id}
              columnType="activity"
            />
          </span>
          <span className={styles.TableRightAligned}>
            {dollar.format(data.spend)}
            <InlineThread
              isLoading={isLoading}
              threads={threads || []}
              rowId={id}
              columnType="spend"
            />
          </span>
          <span className={styles.TableRightAligned}>
            {dollar.format(data.spend)}
            <InlineThread
              isLoading={isLoading}
              threads={threads || []}
              rowId={id}
              columnType="pipeline"
            />
          </span>
        </div>
      ))}
    </div>
  );
}
