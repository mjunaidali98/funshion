
import dynamic from "next/dynamic"
const Layout = dynamic(() => import("/components/layout"))
const LoginForm = dynamic(() => import("/components/loginForm"))

export default function Login() {

    return (
        <Layout>
            <LoginForm />
        </Layout>
    )
}
