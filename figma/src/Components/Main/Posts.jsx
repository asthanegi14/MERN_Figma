// Posts.js
import React from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { postData } from './postData';

export default function Posts() {
    return (
        <div className="flex flex-col gap-4">
            {postData.map((item, idx) => (
                <div key={idx} className='flex flex-col gap-4 border'>
                    {item.img && <img src={item.img} alt="img1" />}
                    <div className="flex flex-col gap-2 p-4">

                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[18px]'>{item.title}</h2>
                            <div className='flex justify-between'>
                                <h1 className='text-[22px] font-semibold'>{item.heading}</h1>
                                <HiDotsHorizontal className='w-[28px]' />
                            </div>
                            <p className='text-[19px] text-gray-500'>{item.description}</p>

                            <div className="flex justify-between font-semibold">
                                <p className="flex gap-2 justify-center items-center">{item.dateIcon}{item.date}</p>
                                <p className="flex gap-2 justify-center items-center">{item.locationIcon}{item.location}</p>
                            </div>

                            {idx >= 2 &&
                                <button className={`border py-2 ${idx == 2 ? 'text-red-500' : 'text-green-500'}`}>{item.button}</button>
                            }

                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-2 justify-center items-center'>
                                <img src={item.profile} alt="profile" className='w-[48px]' />
                                <h2 className='text-[18px] font-semibold'>{item.name}</h2>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <p className='flex gap-2 text-[14px] justify-center items-center'><LuEye className='w-[18px]' /> {item.views}</p>
                                <IoShareSocialSharp className='w-[13.5px]' />
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
