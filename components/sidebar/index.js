import Link from "next/link";
import { memo } from "react";
import styles from "./sidebar.module.css";

function Sidebar({ title = "dissolve", Description = "ideas", pages }) {
  return (
    <nav className={styles.sidebar}>
      <Link href="/">
        <h1 className={styles.title}>{title}</h1>
      </Link>
    </nav>
  );
}

export default memo(Sidebar);
