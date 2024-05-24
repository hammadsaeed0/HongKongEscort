import React, { useState } from "react";
import MainSlider from "../../slider/Slider";
import Navbar from "../../navbar/Navbar";

const EscortRegister = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        website: "",
        name: "",
        city: "",
        about: "",
        gender: "",
        country: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        currency: "",
        incallRates: {
            "1h": "",
            "2h": "",
            "3h": "",
            "4h": "",
            "5h": "",
            "12h": "",
            "24h": "",
        },
        outcallRates: {
            "1h": "",
            "2h": "",
            "3h": "",
            "4h": "",
            "5h": "",
            "12h": "",
            "24h": "",
        },
        services: {
            owo: false,
            oLevel: false,
            cim: false,
            cof: false,
            cob: false,
            swallow: false,
            dfk: false,
            aLevel: false,
            analRimming: false,
            sixtyNine: false,
            striptease: false,
            eroticMassage: false,
            goldenShower: false,
            couples: false,
            gfe: false,
            threesome: false,
            footFetish: false,
            sexToys: false,
            extraball: false,
            domination: false,
            lt: false,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRateChange = (e, type, duration) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [type]: {
                ...prevState[type],
                [duration]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form data:", formData);
    };
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

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            services: {
                ...prevState.services,
                [name]: checked,
            },
        }));
    };

    return (
        <div className="">
            <Navbar />
            <MainSlider />
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
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold text-center mb-4 text-blue">
                            Escort Registration
                        </h1>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Website */}
                            <div className="mb-4">
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Website
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* City */}
                            <div className="mb-4">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* About */}
                            <div className="mb-4">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    About
                                </label>
                                <textarea
                                    id="about"
                                    name="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 lg:h-40 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                ></textarea>
                            </div>

                            {/* Gender */}
                            <div className="mb-4">
                                <span className="block text-sm font-medium text-gray-700">
                                    Gender
                                </span>
                                <div className="mt-1 flex">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="Female"
                                        onChange={handleChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Female
                                    </label>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="Male"
                                        onChange={handleChange}
                                        className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="male"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Ladyboy
                                    </label>
                                   
        
                                </div>
                            </div>

                            {/* Country */}
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select Country</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    {/* Add more country options here */}
                                </select>
                            </div>

                            {/* Date of Birth */}
                            <div className="mb-4">
                                {/* <label
                                    htmlFor="dobDay"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date of Birth
                                </label> */}
                                <div className="mb-4">
                                    <div className="flex mt-1">
                                        {/* <select
                                            id="dobDay"
                                            name="dobDay"
                                            value={formData.dobDay}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        >
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select> */}
                                        {/* <select
                                            id="dobMonth"
                                            name="dobMonth"
                                            value={formData.dobMonth}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        >
                                            <option value="">Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select> */}
                                        {/* <select
                                            id="dobYear"
                                            name="dobYear"
                                            value={formData.dobYear}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        > */}
                                            {/* <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            */}
                                        {/* </select> */}
                                    </div>
                                </div>
                            </div>

                            {/* Ethnicity */}
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Ethnicity
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="USA">Black</option>
                                    <option value="UK">White</option>
                                    {/* Add more country options here */}
                                </select>
                            </div>


                            {/* Ethnicity */}
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Look
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="USA">Black</option>
                                    <option value="UK">White</option>
                                    {/* Add more country options here */}
                                </select>
                            </div>


                            {/* Ethnicity */}
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Hair Lenght
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="USA">Black</option>
                                    <option value="UK">White</option>
                                    {/* Add more country options here */}
                                </select>
                            </div>


                            {/* Ethnicity */}
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Bust Size
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="USA">Black</option>
                                    <option value="UK">White</option>
                                    {/* Add more country options here */}
                                </select>
                            </div>

                            {/* Gender */}
                            <div className="mb-4">
                                <span className="block text-sm font-medium text-gray-700">
                                    Availability
                                </span>
                                <div className="mt-1 flex">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="Female"
                                        onChange={handleChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        In Call
                                    </label>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="Male"
                                        onChange={handleChange}
                                        className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="male"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Out Call
                                    </label>
                                </div>
                            </div>

                            {/* Rate  */}

                            <div className="mb-8">
                                <label
                                    htmlFor="currency"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Select Currency
                                </label>
                                <select
                                    id="currency"
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                >
                                    <option value="">Select Currency</option>
                                    {/* Add options for currencies here */}
                                </select>
                            </div>
                            {/* <div className="mb-8">
                                <h2 className="text-lg font-medium text-gray-700 mb-2">
                                    Incall Rates
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {Object.entries(formData.incallRates).map(
                                        ([duration, rate]) => (
                                            <div key={duration} className="flex flex-col">
                                                <label
                                                    htmlFor={`incall-${duration}`}
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    {duration}
                                                </label>
                                                <input
                                                    type="number"
                                                    id={`incall-${duration}`}
                                                    name={`incall-${duration}`}
                                                    value={rate}
                                                    onChange={(e) =>
                                                        handleRateChange(e, "incallRates", duration)
                                                    }
                                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div> */}
                            {/* <div className="mb-8">
                                <h2 className="text-lg font-medium text-gray-700 mb-2">
                                    Outcall Rates
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {Object.entries(formData.outcallRates).map(
                                        ([duration, rate]) => (
                                            <div key={duration} className="flex flex-col">
                                                <label
                                                    htmlFor={`outcall-${duration}`}
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    {duration}
                                                </label>
                                                <input
                                                    type="number"
                                                    id={`outcall-${duration}`}
                                                    name={`outcall-${duration}`}
                                                    value={rate}
                                                    onChange={(e) =>
                                                        handleRateChange(e, "outcallRates", duration)
                                                    }
                                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div> */}

                            {/* Services  */}
                            <div className="mb-8">
                                <h2 className="text-lg font-medium text-gray-700 mb-2">Services</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {Object.entries(formData.services).map(([service, checked]) => (
                                        <div key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={service}
                                                name={service}
                                                checked={checked}
                                                onChange={handleServiceChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor={service} className="text-sm text-gray-700">{service}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Website */}
                            <div className="mb-4">
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Extra services
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-secondary to-blue text-white w-[200px] h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out"
                                >
                                    <p className="text-[14px]">Complete Register</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Third section with 25% width */}
                <div className="w-[15%] py-2 border border-secondary bg-black"></div>
            </div>
        </div>
    );
};

export default EscortRegister;
