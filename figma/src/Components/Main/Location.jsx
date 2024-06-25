import { FaPencilAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

export default function Location() {
    return (
        <div>
            <div className="flex justify-between m-4">
                <h2 className="flex gap-2 font-semibold">
                    <IoLocationOutline />
                    <input type="text" placeholder="Noida, India" className="placeholder-black" />
                </h2>
                <FaPencilAlt />
            </div>

            <div className="flex gap-2 m-4 ">
                <MdErrorOutline className="w-8" />
                <p className="text-[12px]">Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div>
    )
}
