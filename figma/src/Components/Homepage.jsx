import Img from "../assets/homepage.jpeg";
import { FaArrowLeft } from "react-icons/fa";

export default function Homepage() {
    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            <img src={Img} alt="homepage" className="absolute top-0 left-0 w-full h-[91%] object-cover bg-black bg-opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[91%] bg-black opacity-50"></div>

            <div className="sm:hidden absolute flex justify-between items-center p-4 top-0 left-0 w-full text-white">
                <FaArrowLeft />
                <button className="border-1 border-white p-2 rounded">Join Group</button>
            </div>
            <div className="absolute flex flex-col sm:bottom-28 sm:left-28 bottom-24 p-4 text-white">
                <h1 className="sm:text-[36px] text-[24px] font-bold">Computer Engineering</h1>
                <p className="sm:text-[18px] text-[15px]">142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
}
