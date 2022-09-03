import Link from "next/link"
import Input from "../common/input"
import Button from "../common/button"
import { useStore } from "../../context";
const Index = () => {
    const { screen, dispatch } = useStore();

    return (
        <div className="mt-[120px] max-w-[306px] mx-auto pb-16">
            <p className={`text-[28px] leading-8 font-bold uppercase text-center`}>
                Welcome <br />
                Please Sign in!
            </p>
            <form>
                <div className="flex mt-7 justify-center space-x-7">
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input onChange={() => dispatch({
                                type: "SET_SCREEN",
                                payload: "login"
                            })}
                                role={"button"}

                                checked={screen.includes("login")}
                                type="radio" className="w-4 h-4 border border-black flex items-center justify-center flex-col" name="radio-colors" defaultValue={1} defaultChecked />
                            <span className="ml-2.5 text-xs leading-[14.52px] font-medium">Sign In</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input onChange={() => dispatch({
                                type: "SET_SCREEN",
                                payload: "signup"
                            })}
                                checked={screen.includes("signup")}
                                role={"button"}

                                type="radio" className="w-4 h-4 border border-black flex items-center justify-center flex-col" name="radio-colors" defaultValue={2} />
                            <span className="ml-2.5 text-xs leading-[14.52px] font-medium">Create Account</span>
                        </label>
                    </div>
                </div>
                <div className="mt-7">
                    <Input inputRequired={true} type={"email"} label="Email" />
                    <Input style={"mt-4"} inputRequired={true} type={"password"} label="Password" />

                    <div className="flex items-center justify-between w-full mt-3">
                        <Link href={"javascript:void(0)"}>
                            <a>
                                <p className=" text-[10px] leading-3 font-medium">Forgot Your Password</p>
                            </a>
                        </Link>

                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="form-checkbox border-black ring-red-400 text-black w-4 h-4" defaultChecked />
                                <span className="ml-1.5 text-[10px] leading-3 font-medium">Remember Me</span>
                            </label>
                        </div>

                    </div>
                    <Button type={"submit"} text={"Sign In"} style="py-3 w-full mt-3 leading-[16.94px]" />

                    <div className="flex items-center  mt-3">
                        <div className="w-full border-b border-black " />

                        <p className="px-[5px] text-[10px] leading-3 font-semibold">or</p>
                        <div className="w-full border-b border-black " />
                    </div>

                    <div className="mt-3.5 flex flex-col items-center justify-center">
                        <p className="text-[10px] leading-3 font-semibold">Sign in with</p>
                        <div className="mt-3 flex items-center justify-center space-x-5">
                            <a href="javascript:void(0)" rel="noreferrer" target={"_blank" }>
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
                <a target={"_blank"} rel="noreferrer" href="javascript:void(0)">
                    <p className=" text-[10px] leading-3 ">Privacy Policy and Cookies</p>
                </a>
                <div className="h-2.5 mx-2.5 border-l-2 border-black " />
                <a target={"_blank"} rel="noreferrer" href="javascript:void(0)">
                    <p className=" text-[10px] leading-3 ">Privacy Policy and Cookies</p>
                </a>
            </div>

        </div>
    )
}

export default Index