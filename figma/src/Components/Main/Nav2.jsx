import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Join from "../../assets/join.png";
import { MdExitToApp } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Posts from './Posts';
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import F1 from "../../assets/f1.png";
import F2 from "../../assets/f2.png";
import F3 from "../../assets/f3.png";
import F4 from "../../assets/f4.png";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';

function NavScrollExample() {
    const [activeTab, setActiveTab] = useState('All Posts');
    const [joinGrp, setJoinGrp] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const follow = [
        { img: F1, name: "Leisure" },
        { img: F2, name: "Activism" },
        { img: F3, name: "MBA" },
        { img: F4, name: "Philosophy" },
    ];

    const handleJoinGrp = () => {
        setJoinGrp(!joinGrp);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getTabStyle = (tab) => {
        return {
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: activeTab === tab ? 'bold' : 'normal',
            borderBottom: activeTab === tab ? '2px solid black' : 'none',
        };
    };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <Navbar expand="lg">
                <Container fluid className='border-b'>
                    <div className='flex sm:w-auto w-full justify-between'>
                        <Navbar.Brand href="#home" className='lg:hidden flex-grow'>Posts(368)</Navbar.Brand>
                        <div onClick={handleNavCollapse} className="flex items-center lg:hidden cursor-pointer bg-gray-200 rounded-sm p-2">
                            <span>Filter: All</span>
                            <FaChevronDown className={`ml-2 transition-transform ${isNavCollapsed ? '' : 'rotate-180'}`} />
                        </div>
                        <Navbar.Collapse id="navbarScroll" className={`mb-0 lg:flex ${isNavCollapsed ? 'hidden' : ''}`}>
                            <Nav className="flex flex-wrap gap-2 lg:gap-4 me-auto my-2 my-lg-0" navbarScroll>
                                <p style={getTabStyle('All Posts')} onClick={() => handleTabClick('All Posts')}>All Posts(32)</p>
                                <p style={getTabStyle('Article')} onClick={() => handleTabClick('Article')}>Article</p>
                                <p style={getTabStyle('Event')} onClick={() => handleTabClick('Event')}>Event</p>
                                <p style={getTabStyle('Education')} onClick={() => handleTabClick('Education')}>Education</p>
                                <p style={getTabStyle('Job')} onClick={() => handleTabClick('Job')}>Job</p>
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                    <div className="gap-2 lg:gap-4 flex flex-wrap justify-center lg:justify-end">
                        <button className='join-group-button bg-[#EDEEF0] text-black border-0 rounded-none hover:bg-gray-400 p-2'>Write a Post</button>
                        <button className="join-group-button flex gap-2 justify-center items-center rounded-none" onClick={handleJoinGrp}>
                            {!joinGrp ? (
                                <div className='flex gap-2 justify-center items-center bg-blue-600 text-white p-2'>
                                    <img src={Join} alt="join image" />
                                    Join Group
                                </div>
                            ) : (
                                <div className='flex p-2 gap-2 justify-center items-center bg-white border border-gray-400 text-black'>
                                    <MdExitToApp /> Exit Group
                                </div>
                            )}
                        </button>
                    </div>
                </Container>
            </Navbar>

            <div className='flex flex-col lg:flex-row justify-between m-4'>
                <div className='w-full lg:w-3/4 mb-4 lg:mb-0'>
                    <Posts />
                </div>
                <div className='sm:flex sm:flex-col hidden w-full lg:w-1/4'>
                    <div className="flex justify-between m-4 items-center">
                        <h2 className="flex gap-2 font-semibold items-center">
                            <IoLocationOutline />
                            <input
                                type="text"
                                placeholder={!joinGrp ? "Noida, India" : "Enter your location"}
                                className={`${!joinGrp ? "placeholder-black" : "placeholder-gray-700"} border-none outline-none`}
                                readOnly={!joinGrp}
                            />
                        </h2>
                        <FaPencilAlt />
                    </div>

                    <div className="flex gap-2 m-4 items-start">
                        <MdErrorOutline className="w-8" />
                        <p className="text-[12px]">Your location will help us serve better and extend a personalised experience.</p>
                    </div>

                    {joinGrp && <div className="flex flex-col gap-4 m-4">
                        <h2 className='text-[14px] font-bold uppercase flex gap-2'> <FaRegThumbsUp /> REcommended Groups</h2>

                        {follow.map((item, idx) => (
                            <div key={idx} className='flex gap-2 justify-between items-center'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <img src={item.img} alt="image" />
                                    <h2>{item.name}</h2>
                                </div>
                                <button className='bg-gray-300 px-3 rounded-full text-[12px]'>Follow</button>
                            </div>
                        ))}

                        <p className='text-[12px] text-blue-400 text-right'>See More...</p>
                    </div>}
                </div>
            </div>

            <div className="fixed bottom-4 right-4 lg:hidden">
                <button className="bg-red-600 text-white p-4 rounded-full shadow-lg">
                    <FaPen />
                </button>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .join-group-button {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}

export default NavScrollExample;
