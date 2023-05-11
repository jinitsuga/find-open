import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2>Bienvenid@!</h2>
        <h4 className={styles.heading}>
          Encuentra locales abiertos cerca tuyo.{" "}
        </h4>
        <p className={styles.mainText}>
          <strong>Disclaimer: </strong>Esta app necesita acceder a tu ubicación
          para poder brindarte información sobre los locales abiertos en tu
          cercanía. Puedes optar por no revelar tu ubicación, pero de no
          hacerlo, la app no funcionará correctamente.
        </p>
      </main>
    </Layout>
  );
}
