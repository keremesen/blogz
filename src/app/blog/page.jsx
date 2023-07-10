"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  if(typeof window !=="undefined"){

    const res = await fetch(`${ window.location.origin}/api/posts`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return notFound();
    }
    
    return res.json();
  }
}


const Blog = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(result => setData(result));
  }, []);


  return (
    <div className={styles.mainContainer}>
      { data && data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
