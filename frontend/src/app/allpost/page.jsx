"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  const [datas, setdatas] = useState();
  const [error, setError] = useState("");
  async function getdatas() {
    const response = await fetch("http://localhost:5000", {
      method: "GET",
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      setdatas(result);
    }
  }
  async function deleteDataByID(id) {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted Successfully ...");
      setTimeout(() => {
        setError("");
        getdatas();
      }, 2000);
    }
  }
  useEffect(() => {
    getdatas();
  }, []);

  return (
    <section className={styles.section}>
      {error && alert(error)}
      <h1>All User</h1>
      <div className={styles.cards}>
        {datas?.map((data) => (
          <div className={styles.card} key={data._id}>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.age}</p>
            <div>
              <p onClick={() => deleteDataByID(data._id)}>Delete</p>
              <Link href={`/${data._id}`}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
