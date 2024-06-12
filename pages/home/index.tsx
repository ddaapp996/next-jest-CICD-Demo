import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="https://i.pinimg.com/1200x/40/c5/95/40c59547dee3bd2ac4dd2ba88bfff741.jpg" alt="" srcset="" />
      <p>
        <h1>Hoàng Tường Vy chưa làm bài tập Elsa</h1>
        <h1>Hoàng Anh Khoa ít đi chơi lại</h1>
        <h1>Hoàng Anh Khôi đái dầm</h1>
      </p>
    </div>
  );
}
