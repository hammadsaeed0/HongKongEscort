import React from "react";
import Navbar from "../../../navbar/Navbar";
import EscortNavbar from "../../../navbar/EscortNavbar";

const EscortProfile = () => {
    const link = [
        { id: 1, name: "Abu Al Abyad Russian Escort Service" },
        { id: 2, name: "Russian Call Girls Abu Al Abyad" },
        { id: 3, name: "Abu Dhabi Airport Road Russian Escort Service" },
        { id: 4, name: "Abu Dhabi Capital District Russian Escort Service" },
        { id: 5, name: "Abu Dhabi Corniche Area Russian Escort Service" },
        { id: 6, name: "Abu Dhabi Eastern Road Russian Escort Service" },
        { id: 7, name: "Abu Dhabi Gate City Russian Escort Service" },
        { id: 8, name: "Abu Dhabi Russian Escort Service" },
        { id: 9, name: "Abu Dhabi Villa Compound Russian Escort Service" },
        { id: 10, name: "Academic City Russian Escort Service" },
        { id: 11, name: "Airport Street Russian Escort Service" },
        { id: 12, name: "Ajman Russian Escort Service" },
        { id: 13, name: "Al Adla City Russian Escort Service" },
        { id: 14, name: "Al Ain Russian Escort Service" },
    ];
    const services = [
        { name: 'OWO', description: 'Oral without condom' },
        { name: 'O-Level', description: 'Oral sex' },
        { name: 'CIM', description: 'Come in mouth' },
        { name: 'COF', description: 'Come on face' },
        { name: 'COB', description: 'Come on body' },
        { name: 'Swallow', description: 'Swallow' },
        { name: 'DFK', description: 'Deep french kissing' },
        { name: 'A-Level', description: 'Anal sex' },
        { name: 'COF', description: 'Come on face' },
        { name: 'COB', description: 'Come on body' },
        { name: 'Swallow', description: 'Swallow' },
        { name: 'DFK', description: 'Deep french kissing' },
        { name: 'A-Level', description: 'Anal sex' }
    ];

    const rates = [
        { time: '30min', incall: '$100', outcall: '$150' },
        { time: '1h', incall: '$150', outcall: '$200' },
        { time: '2h', incall: '$200', outcall: '$250' },
        // { time: 'Overnight', incall: '$400', outcall: '$500' }
    ];
    return (
        <>
            <Navbar />
            <EscortNavbar />
            <div className=" flex bg-[#FFF0F4]  w-full">
                <div className="w-[20%] border border-primary py-5">
                    <h2 className="px-4 font-normal text-primary text-[18px]">
                        Dubai Russian Escorts <br /> Location:
                    </h2>
                    <ul className="px-4">
                        {link.map((link) => (
                            <li className="py-2" key={link.id}>
                                <a href={link.name} className="text-blue text-blue-700 ">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[65%] ">
                    <div className="flex flex-col items-center mt-5">
                        {/* Escort Name */}
                        <h1 className="text-3xl font-bold mb-2 text-pink">Escort Name</h1>
                        {/* Profile Status */}
                        <div className=" px-5  rounded-full bg-[#FD5959]">
                            <p className=" text-[14px] text-white">Private</p>
                        </div>
                        {/* Online Status */}
                        <div className=" px-5  rounded-full bg-[#0CCC25] mt-3">
                            <p className=" text-[14px] text-white">Online</p>
                        </div>
                        {/* Image Upload Section */}
                        <div className=" border-pink mt-4 rounded-lg p-8 border-dashed border-[2px] ">
                            <label
                                htmlFor="image"
                                className="block text-lg font-bold mb-4 text-pink"
                            >
                                Upload Images
                            </label>
                            <div className="flex items-center justify-center border border-dashed border-gray-400 rounded-md p-4">
                                <input type="file" id="image" className="hidden" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-gray-400 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="#D633A3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.464 5.536a8 8 0 1011.314 11.314A8 8 0 003.464 5.536zM9 4a6 6 0 100 12 6 6 0 000-12z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M9 10a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-[16px] text-[gray] w-[300px]">
                                    Drag and drop your images here or click to{" "}
                                    <span className="text-pink">select from your device</span>
                                </span>
                            </div>
                        </div>
                        {/* About Section  */}
                        <div className=" w-[100%] bg-white p-5 h-[300px] rounded-md mt-4">
                            <div>
                                <h1 className="font-medium text-[16px] text-pink">ABOUT ME:</h1>
                            </div>
                            <div>
                                <p className="font-bold text-[18px]">
                                    25 year old Female from <span className="text-pink">Dubai</span>
                                </p>
                                <p className=" text-[16px] leading-6 font-light">
                                    Hello my sweethearts, my name is Roshni Mehta and I am a
                                    22-year-old hot and sexy independent call girl. My hunger for
                                    sex will give you next level satisfaction and you will always
                                    remember the time which we will spend together. I am not
                                    loose, nor tight, my service is 100% guaranteed, so much so
                                    that you will want more and more to be with me. My greasy
                                    touches on your sensitive body parts will amplify your sexual
                                    pleasure and you will love to feel my softness to you. You
                                    will never forget the sex you had with me and you will become
                                    my first. For every customer who sleeps with me, I am also the
                                    complete masterpiece they want. You will see that I love what
                                    I do as I do it to you.
                                </p>
                            </div>
                        </div>
                        {/* Her Section  */}
                        <div className=" w-[100%] py-2  rounded-md mt-4 flex justify-between">

                            <div className=" w-[49%] py-2 rounded-md mt-2 flex flex-col ">
                                {/* AVAILABILITY */}
                                <div className=" w-[100%] bg-white py-2 h-auto rounded-md ">

                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                    </div>
                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                    </div>
                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                                            <p className="text-[18px]">Incall, Outcall</p>
                                        </div>
                                    </div>

                                </div>
                                {/* CONTACT INFO: */}
                                <div className="w-full bg-white py-2 rounded-md mt-10 p-5">
                                    <h1 className="font-bold text-2xl text-blue mb-4">CONTACT INFO:</h1>
                                    <div className="mb-4">
                                        <p><span className="font-bold mr-2">City:</span> Dubai Russain Call Girls</p>
                                        <p><span className="font-bold mr-2">Country:</span> Dubai Russian Escort Service</p>
                                        <p><span className="font-bold mr-2">Website:</span> <a href="https://hongkongservice.com/" className="text-blue-500 hover:underline">dubairussianescortservice.com</a></p>
                                        <p><span className="font-bold mr-2">Phone:</span> <a href="tel:+971569407105" className="text-blue-500 hover:underline">+971569407105</a></p>
                                    </div>

                                    <button className="bg-gradient-to-r from-secondary to-blue text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                        <p className="text-lg">Contact On Whatsapp</p>
                                    </button>
                                </div>

                            </div>

                            {/* Service SEction  */}
                            <div className=" w-[49%] mt-2 py-2 rounded-md">
                                <div className=" w-[100%] bg-white py-2 rounded-md p-5">
                                    <h1 className="font-bold text-[24px] text-blue ">SERVICES:</h1>
                                    <div>
                                        {services.map((service, index) => (
                                            <div key={index} className="flex items-center py-0.5">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Green_tick.png" alt="tick" className="w-4 h-4 mr-2" />
                                                <p className="font-light text-[18px]">{service.name}: {service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* RATES: Section ? */}
                                <div className=" w-[`100%] bg-white py-2  rounded-md  mt-10 p-5 ">
                                    <h1 className="font-bold text-[24px] text-blue ">RATES:</h1>
                                    <div className="flex justify-between font-bold">
                                        <div className="w-1/4 "><p className="text-center text-white text-[18px]">Incall</p></div>
                                        <div className="w-1/3 bg-secondary "><p className="text-center text-white text-[18px]">Incall</p></div>
                                        <div className="w-1/3 bg-secondary"><p className="text-center text-white text-[18px]">Incall</p></div>
                                    </div>
                                    {rates.map((rate, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <div className="w-1/4"><p className="text-center font-bold text-primary">{rate.time}</p></div>
                                            <div className="w-1/3"><p className="text-center font-light text-primary">{rate.incall}</p></div>
                                            <div className="w-1/3"><p className="text-center font-light text-primary">{rate.outcall}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


                <div className="w-[15%] bg-primary"></div>
            </div>
        </>
    );
};

export default EscortProfile;
