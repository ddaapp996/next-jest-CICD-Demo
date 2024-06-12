import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="https://i.pinimg.com/1200x/40/c5/95/40c59547dee3bd2ac4dd2ba88bfff741.jpg" alt="" />
      <p>
        <h1>Hoàng Tường Vy chưa làm bài tập Elsa</h1>
        <h1>Hoàng Anh Khoa mỏ rươi, hay khóc nhè</h1>
        <h1>Hoàng Anh Khôi hay đái dầm</h1>
      </p>

      {/* Add a new card */}
      <div className={styles.card}>
        <img src="https://i.pinimg.com/736x/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg" alt="New Card" style={{ width: "200px", height: "150px" }} />
        <h2>New Card Title</h2>
        <p>New card description goes here.</p>
      </div>
    </div>
  );
}