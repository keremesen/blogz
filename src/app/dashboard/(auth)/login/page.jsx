"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button className={styles.buttonGoogle} onClick={() => signIn("google")}>
        Login With Google
      </button>
      <Link href="/dashboard/register">Dont have an account? Create new.</Link>
    </div>
  );
};

export default Login;
