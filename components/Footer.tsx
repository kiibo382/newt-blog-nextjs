import { AppMeta } from "newt-client-js";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <div className={styles.Link}>
          <a
            href="https://github.com/kiibo382/newt-blog-nextjs"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.Link}>
          <a
            href="https://twitter.com/shota_kizawa"
            rel="noreferrer noopener"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
