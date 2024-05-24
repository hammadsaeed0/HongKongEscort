import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: val,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle login submission here, such as sending the data to your backend
        console.log("Form data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary flex-col">
            <h2 className="text-4xl text-white hover:text-blue font-bold text-center mb-4">
                Hong Kong Escort Service
            </h2>

            <div className="bg-white p-8 rounded-lg w-full max-w-md">
             
                <form onSubmit={handleSubmit}>
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
                            autoComplete="off"
                            className="mt-1 h-12 w-full  border-secondary border rounded-md px-3 py-2"
                        />
                    </div>
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
                            autoComplete="off"
                            className="mt-1 h-12 w-full  border-secondary border rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>
                    <div className="text-center mb-4">
                        {/* <button
                            type="submit"
                            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button> */}
                        <button className="bg-gradient-to-r from-secondary to-blue text-white w-[200px] h-[30px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className="text-[14px]">Login</p>
          </button>
                    </div>
                </form>
                <div className="text-center text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
