"use client"

import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div>
      <button onClick={()=>signIn("google") }>login w google</button>
    </div>
  )
}

export default Login