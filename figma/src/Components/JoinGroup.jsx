import Img from '../assets/groupJoin.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

export default function JoinGroup({ onClose }) {
    const [signIn, setSignIn] = useState(false);

    const handleSignIn = () => {
        setSignIn(!signIn);
    }

    const FormSection = ({ title, children, switchText, onSwitch }) => (
        <div className='flex flex-col sm:flex-row p-4 justify-between'>
            <div className="flex flex-col flex-1 gap-4">
                <h2 className='text-2xl font-bold'>{title}</h2>
                <form className='flex flex-col gap-2'>
                    {children}
                    <div className='flex sm:flex-col flex-row justify-between'>
                        <button className='bg-blue-600 text-white rounded-full py-2 sm:w-full w-1/2'>{title}</button>
                        <span className='sm:hidden flex text-blue-600 font-bold cursor-pointer' onClick={onSwitch}>{signIn ? "Create new for free!" : "Or, Sign In"}</span>
                    </div>
                    <button className='flex gap-2 justify-center items-center border border-white py-2'>
                        <FaFacebook /> {title} with Facebook
                    </button>
                    <button className='flex gap-2 justify-center items-center border border-white py-2'>
                        <FcGoogle /> {title} with Google
                    </button>

                    {signIn && <p className='text-[12px] text-center mt-2 font-semibold cursor-pointer'>Forgot Password?</p>}
                </form>
            </div>
            <div className="sm:flex hidden flex-col flex-1 py-2 mx-4">
                <p>{switchText} <span className='text-blue-600 font-bold cursor-pointer' onClick={onSwitch}>{signIn ? "Create new for free!" : "Sign In"}</span></p>
                <img src={Img} alt="group join illustration" className="max-w-full h-auto" />
                <p className='text-[11px]'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
        </div>
    );

    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-end sm:items-center sm:justify-center bg-black bg-opacity-50 z-50'>
            <div className='relative flex flex-col sm:w-[62%] w-full sm:bottom-auto bottom-0 bg-gray-200 rounded-t sm:rounded popup-content overflow-hidden'>
                <RxCross2 className='absolute top-3 right-3 sm:top-3 sm:right-3 cursor-pointer bg-gray-300 rounded-full w-6 h-6 p-1' onClick={onClose} />
                <div className='sm:flex hidden bg-green-100 p-4 rounded'>
                    <h2 className='text-[#008A45]'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h2>
                </div>
                {!signIn ? (
                    <FormSection title="Create Account" switchText="Already have an account?" onSwitch={handleSignIn}>
                        <div className="flex flex-col gap-2">
                            <div className='flex'>
                                <input type="text" placeholder='First Name' className='border border-gray-300 p-2 w-1/2' />
                                <input type="text" placeholder='Last Name' className='border border-gray-300 p-2 w-1/2' />
                            </div>
                            <input type="email" placeholder='Email' className='border border-gray-300 p-2' />
                            <input type="password" placeholder='Password' className='border border-gray-300 p-2' />
                            <input type="password" placeholder='Confirm Password' className='border border-gray-300 p-2' />
                        </div>
                    </FormSection>
                ) : (
                    <FormSection title="Sign In" switchText="Don’t have an account yet?" onSwitch={handleSignIn}>
                        <div className="flex flex-col gap-2">
                            <input type="email" placeholder='Email' className='border border-gray-300 p-2' />
                            <input type="password" placeholder='Password' className='border border-gray-300 p-2' />
                        </div>
                    </FormSection>
                )}
            </div>
        </div>
    );
}
