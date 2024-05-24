import React, { useState } from 'react';

function Navbar() {
  const [country, setCountry] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for country:", country);
    // Implement search logic here
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-32">
          <div className="h-16 flex justify-center items-center md:items-end md:justify-start">
            <h1 className="text-blue text-2xl font-extrabold md:text-4xl">
              Hot Girls Hong Kong
            </h1>
          </div>
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <div className="md:block flex flex-shrink">
                <div className="flex items-baseline space-x-10">
                  <a href="#" className="text-white font-medium text-[18px]">
                    Home
                  </a>
                  <a href="#" className="text-white font-medium text-[18px]">
                    Girls
                  </a>
                  <a href="#" className="text-white font-medium text-[18px]">
                    Ladyboys
                  </a>
                  <a href="#" className="text-white font-medium text-[18px]">
                    Our Blogs
                  </a>
                  <a href="#" className="text-white font-medium text-[18px]">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Country search input */}
              <input
                type="text"
                value={country}
                onChange={handleCountryChange}
                placeholder="Search by country"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <button
                onClick={handleSearch}
                className="ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink"
              >
                Search
              </button>
              {/* Filter options */}
              <select className="ml-4 border border-gray-300 rounded-md px-3 py-2">
                <option value="">Filter</option>
                <option value="youngest">From Neighborhood</option>
                <option value="oldest">From Cheapest</option>
                <option value="oldest">From Closest</option>
                <option value="oldest">From Youngest</option>
              </select>

              <button className="ml-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink">
                Register
              </button>
              <button className="ml-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
