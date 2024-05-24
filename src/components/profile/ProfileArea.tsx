import React from "react";

const ProfileArea = () => {
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
    // { time: '30min', incall: '$100', outcall: '$150' },
    { time: '1h', incall: '$150', outcall: '$200' },
    // { time: '2h', incall: '$200', outcall: '$250' },
    // { time: 'Overnight', incall: '$400', outcall: '$500' }
  ];

  return (
    <div className="flex w-[100%] bg-halfWhite">
      {/* First section with 25% width */}
      <div className="w-[20%] py-2 border border-secondary">
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

      {/* Second section with 50% width */}
      <div className="w-[65%] py-2 px-4 ">
        <div className="flex justify-between py-2 ">
          <h1 className="text-blue text-[22px] font-normal">Premimum Escort</h1>
          <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className="text-[14px]">All Premimum Escort</p>
          </button>
        </div>
        <div className="w-auto ">
          <div className="w-[100%] flex justify-between">
            <div className="w-64 py-2 bg-black">
              <img src="https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_640.jpg" alt="Image" loading="lazy" style={{ objectFit: 'contain', }} />
            </div>
            <div className="w-[60%] py-2 flex items-center justify-center  rounded-lg">
              <div className="flex flex-wrap items-center justify-center py-5 gap-4">
              <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>Type</p>
                  <p>PREMIUM</p>
                </div>
                <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>Call Me</p>
                  <p>+971569407105</p>
                </div>
                <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>25</p>
                  <p>Years</p>
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* About Her Section  */}
        <div className=" w-[100%] bg-white p-5 h-[300px] rounded-md mt-4">
          <div>
            <h1 className="font-bold text-[24px] text-blue">ABOUT ME:</h1>
          </div>
          <div>
            <p className="font-bold text-[18px]">
              25 year old Female from Dubai Russain Call Girls, Dubai Russian Escort Service
            </p>
            <p className=" text-[16px] leading-6 font-light">
              Hello my sweethearts, my name is Roshni Mehta and I am a 22-year-old hot and sexy independent call girl. My hunger for sex will give you next level satisfaction and you will always remember the time which we will spend together.

              I am not loose, nor tight, my service is 100% guaranteed, so much so that you will want more and more to be with me. My greasy touches on your sensitive body parts will amplify your sexual pleasure and you will love to feel my softness to you.

              You will never forget the sex you had with me and you will become my first. For every customer who sleeps with me, I am also the complete masterpiece they want. You will see that I love what I do as I do it to you.
            </p>
          </div>
        </div>

        {/* Her Section  */}
        <div className=" w-[100%] py-2  rounded-md mt-4 flex justify-between">

          <div className=" w-[49%] py-2 h-[900px] rounded-md mt-2 flex flex-col ">
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
                <p><span className="font-bold mr-2">Nickname:</span> Malana</p>
                <p><span className="font-bold mr-2">Telegram:</span> Dubai Russian Escort Service</p>
                <p><span className="font-bold mr-2">Wechat:</span> <a href="https://hongkongservice.com/" className="text-blue-500 hover:underline">dubairussianescortservice.com</a></p>
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
              <div className="mt-5">
              <button className="bg-gradient-to-r from-secondary to-blue text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                <p className="text-lg">Ask</p>
              </button>
              <button className="bg-gradient-to-r ml-5 from-secondary to-blue text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                <p className="text-lg">Ask or Call</p>
              </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Third section with 25% width */}
      <div className="w-[15%] py-2 border border-secondary bg-black"></div>
    </div>
  );
};

export default ProfileArea;
