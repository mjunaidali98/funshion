
import dynamic from "next/dynamic"
const Layout = dynamic(() => import("/components/layout"))
const SignupForm = dynamic(() => import("/components/signUpForm"))

export default function Signup() {

    return (
        <Layout>
            <SignupForm />
        </Layout>
    )
}
