import { Button } from "ui";

import styles from "../styles/index.module.css";

import { useEffect, useState } from "react";

function Loading() {
  return <div>Loading...</div>;
}

export function Hello() {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data === null) return <Loading />;

  return <pre>{JSON.stringify(data)}</pre>;
}

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button
        onClick={() => (console.log("Pressed!"), alert("Pressed!"))}
        text="Boop"
      />
      <Hello />
    </div>
  );
}
