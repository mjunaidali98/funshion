import Input from "../common/input"
import Button from "../common/button"
import { useStore } from '../../context';
import Router from "next/router";
function Index() {
    const { screen, dispatch } = useStore();
    const handleSignup = () => {
        const path = "/signup"
        Router.push(path);
        dispatch({
            type: "SET_SCREEN",
            payload: "signup"
        })
    }

    const handleLogin = () => {
        const path = "/login"
        Router.push(path);
        dispatch({
            type: "SET_SCREEN",
            payload: "login"
        })
    }
    return (
        <div className="mt-[120px] max-w-[306px] mx-auto pb-16">
            <p className={`text-[28px] leading-8 font-bold uppercase text-center`}>
                Welcome <br />
                Please Sign Up!
            </p>
            <form>
                <div className="flex mt-7 justify-center space-x-7">
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                role={"button"}
                                onChange={() => handleLogin()}
                                checked={screen.includes("login")}
                                type="radio" className="w-4 h-4 border border-black flex items-center justify-center flex-col" name="radio-colors" defaultValue={1} defaultChecked />
                            <span className="ml-2.5 text-xs leading-[14.52px] font-medium">Sign In</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                role={"button"}
                                onChange={() => handleSignup()}
                                checked={screen.includes("signup")}
                                type="radio" className="w-4 h-4 border border-black flex items-center justify-center flex-col" name="radio-colors" defaultValue={2} />
                            <span className="ml-2.5 text-xs leading-[14.52px] font-medium">Create Account</span>
                        </label>
                    </div>
                </div>
                <div className="mt-7">
                    <Input inputRequired={true} type={"text"} label="Name" required={true} />
                    <Input inputRequired={true} style={"mt-4"} type={"text"} label="Last Name" required={true} />
                    <Input inputRequired={true} style={"mt-4"} type={"email"} label="Create Password" message={"Password Must be 8-10 Charecters"} required={true} />
                    <Input style={"mt-4"} inputRequired={true} type={"password"} label="Confirm Password" required={true} />
                    <Input inputRequired={true} style={"mt-4"} type={"text"} label="Address" required={true} />
                    <Input inputRequired={true} style={"mt-4"} type={"text"} label="Phone" required={true} />

                    <Button type={"submit"} text={"Sign Up"} style="py-3 w-full mt-6 leading-[16.94px]" />

                    <div className="flex items-center  mt-3">
                        <div className="w-full border-b border-black " />

                        <p className="px-[5px] text-[10px] leading-3 font-semibold">or</p>
                        <div className="w-full border-b border-black " />
                    </div>

                    <div className="mt-3.5 flex flex-col items-center justify-center">
                        <p className="text-[10px] leading-3 font-semibold">Sign in with</p>
                        <div className="mt-3 flex items-center justify-center space-x-5">
                            <a href="javascript:void(0)" rel="noreferrer" target={"_blank"}>
                                <img src="./assets/images/Google.svg" />
                            </a>
                            <a href="javascript:void(0)" rel="noreferrer" target={"_blank"}>
                                <img src="./assets/images/facebook.svg" />
                            </a>
                            <a href="javascript:void(0)" rel="noreferrer" target={"_blank"}>
                                <img src="./assets/images/Linkedin.svg" />
                            </a>
                        </div>
                    </div>


                </div>
            </form>
            <div className="mt-7 flex items-center  justify-center">
                <a target={"_blank"} href="javascript:void(0)" rel="noreferrer">
                    <span className=" text-[10px] leading-3 ">Privacy Policy and Cookies</span>
                </a>
                <div className="h-2.5 mx-2.5 border-l-2 border-black " />
                <a target={"_blank"} href="javascript:void(0)" rel="noreferrer">
                    <span className=" text-[10px] leading-3 ">Privacy Policy and Cookies</span>
                </a>
            </div>

        </div>
    )
}

export default Index