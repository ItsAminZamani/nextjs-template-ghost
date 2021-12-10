import styles from "./home.module.css";
import { Sidebar } from "../index";

const Home = ({ posts }) => {
  return (
    <div className={styles.main}>
      <div className={styles.desktopSidebar}>
        <Sidebar />
      </div>
      <div className={styles.desktopContent}>
        <ul>
          {posts.map((post) => (
            // <li key={post.id}>{post.title}</li>
            <div
              key={post.uuid}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
