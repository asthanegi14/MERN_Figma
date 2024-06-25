import Img1 from '../../assets/pro1.png';
import Pro1 from '../../assets/profile1.png';
import Img2 from '../../assets/pro2.png';
import Pro2 from '../../assets/profile2.png';
import Img3 from '../../assets/pro3.png';
import Pro3 from '../../assets/profile3.png';
import Pro4 from '../../assets/profile4.png';
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";

export const postData = [
    {
        img: Img1,
        title: "✍️ Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        profile: Pro1,
        name: "Sarthak Kamra",
        views: "1.4k",
    }, {
        img: Img2,
        title: "🔬️ Education",
        heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        profile: Pro2,
        name: "Sarah West",
        views: "1.4k",
    }, {
        img: Img3,
        title: "🗓️ Meetup",
        heading: "Finance & Investment Elite Social Mixer @Lujiazui",
        dateIcon: <SlCalender />,
        date: "Fri, 12 Oct, 2018",
        locationIcon: <IoLocationOutline />,
        location: "Ahmedabad, India",
        website: "",
        profile: Pro3,
        name: "Sarah West",
        views: "1.4k",
        button: "Visit Website",
    }, {
        title: "💼️ Job",
        heading: "Software Developer",
        dateIcon: <IoBagOutline />,
        date: "Innovaccer Analytics Private Ltd.",
        locationIcon: <IoLocationOutline />,
        location: "Noida, India",
        website: "",
        profile: Pro4,
        name: "Joseph Gray",
        views: "1.4k",
        button: "Apply on Timesjobs",
    }
]