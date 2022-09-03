import dynamic from "next/dynamic"
import { useState } from "react"
import { useStore } from "../context"
const FreeShiping = dynamic(() => import("/components/freeShiping"))
const Header = dynamic(() => import("/components/header"))
const LoginForm = dynamic(() => import("/components/loginForm"))
const SignupForm = dynamic(() => import("/components/signUpForm"))
const Footer = dynamic(() => import("/components/footer"))

export default function Login() {
  const { screen } = useStore();

  return (
    <>
      <FreeShiping />
      <Header />

      {screen.includes("login") ? <LoginForm /> :
        <SignupForm />
      }
      <Footer/>
    </>
  )
}
