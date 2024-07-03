import { Button } from "../comments/Button";
import { NewThread } from "../comments/NewThread";
import { PlusIcon } from "../icons/PlusIcon";
import styles from "./Content.module.css";

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
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $102,294
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $100,010
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $20,112
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $5,102
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $5,318
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $2,433
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $4,111
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $9,820
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $10,912
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $10,912
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $10,912
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
        <div className={styles.TableRow}>
          <span className={styles.TableLink}>
            Activity
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $10,912
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
          <span className={styles.TableRightAligned}>
            $0
            <Button className={styles.ButtonComment} variant="ghost" square>
              <PlusIcon width={16} height={16} />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
