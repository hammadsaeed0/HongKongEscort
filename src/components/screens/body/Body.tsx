import React, { useState } from 'react'

const MainBody = () => {
  const link = [
    { "id": 1, "name": "Abu Al Abyad Russian Escort Service" },
    { "id": 2, "name": "Russian Call Girls Abu Al Abyad" },
    { "id": 3, "name": "Abu Dhabi Airport Road Russian Escort Service" },
    { "id": 4, "name": "Abu Dhabi Capital District Russian Escort Service" },
    { "id": 5, "name": "Abu Dhabi Corniche Area Russian Escort Service" },
    { "id": 6, "name": "Abu Dhabi Eastern Road Russian Escort Service" },
    { "id": 7, "name": "Abu Dhabi Gate City Russian Escort Service" },
    { "id": 8, "name": "Abu Dhabi Russian Escort Service" },
    { "id": 9, "name": "Abu Dhabi Villa Compound Russian Escort Service" },
    { "id": 10, "name": "Academic City Russian Escort Service" },
    { "id": 11, "name": "Airport Street Russian Escort Service" },
    { "id": 12, "name": "Ajman Russian Escort Service" },
    { "id": 13, "name": "Al Adla City Russian Escort Service" },
    { "id": 14, "name": "Al Ain Russian Escort Service" },

  ]
  const escort = [
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-wjSUfqIkgdnIQEwqdTmUG0TexogFpjSmi31rYS4lQ&s",
      "number": "123-456-7890",
      "location": "Abu Dhabi"
    },
    {
      "id": 2,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "987-654-3210",
      "location": "Dubai"
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASDd7fBAAQk3rzA3AzSqDNHLSGUjGQuESnmMhWrXJZw&s",
      "number": "555-555-5555",
      "location": "Sharjah"
    },
    {
      "id": 4,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "111-222-3333",
      "location": "Ajman"
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvpbUAz8AK7RzXPDFOiEdJFr84pbtpAqwjGlOFcbe5A&s",
      "number": "999-888-7777",
      "location": "Ras Al Khaimah"
    },
    {
      "id": 6,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "777-777-7777",
      "location": "Fujairah"
    },
    {
      "id": 7,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "111-222-3333",
      "location": "Ajman"
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvpbUAz8AK7RzXPDFOiEdJFr84pbtpAqwjGlOFcbe5A&s",
      "number": "999-888-7777",
      "location": "Ras Al Khaimah"
    },
    {
      "id": 9,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "777-777-7777",
      "location": "Fujairah"
    }
  ]

  const gridItems = [
    { text: "Grid Item 1" },
    { text: "Grid Item 2" },
    { text: "Grid Item 3" },
    { text: "Grid Item 4" },
    { text: "Grid Item 5" },
    { text: "Grid Item 6" },
    { text: "Grid Item 7" },
    { text: "Grid Item 8" },
    { text: "Grid Item 9" }
  ];

   // State for sorting option
   const [sortBy, setSortBy] = useState("");
   // State for search location
   const [searchLocation, setSearchLocation] = useState("");
 
   // Sort by neighborhood function
   const sortByNeighborhood = () => {
     // Implement sorting logic here
     setSortBy("neighborhood");
   };
 
   // Sort by cheapest function
   const sortByCheapest = () => {
     // Implement sorting logic here
     setSortBy("cheapest");
   };
 
   // Sort by closest function
   const sortByClosest = () => {
     // Implement sorting logic here
     setSortBy("closest");
   };
 
   // Sort by youngest function
   const sortByYoungest = () => {
     // Implement sorting logic here
     setSortBy("youngest");
   };
 
   // Function to handle search location change
   const handleSearchLocationChange = (e) => {
     setSearchLocation(e.target.value);
   };
 
   // Function to handle search
   const handleSearch = () => {
     // Implement search logic here
     console.log("Searching for location:", searchLocation);
   };
 
  const EscortServiceCard = ({ id, image, number, location }) => {
    const cardStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <div className="w-full md:w-1/2 lg:w-[250px] mb-4 bg-halfWhite">
        <div className="bg-white overflow-hidden shadow-md h-[300px] border border-yellwo rounded" style={cardStyle}>
          <div className="p-2 h-[100px] bg-secondary mt-[85%] bg-opacity-60 flex flex-col items-center cursor-pointer hover:bg-opacity-80">
            <p className="text-[18px] text-white mb-2">{location} {number}</p>
            <p className="text-[10px] text-white mb-2">Dubai Model Town , Hong Kong </p>
            <p className="text-[10px] text-white mb-2">Dubai Model Town , Hong Kong </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-[100%] ">
      {/* First section with 25% width */}
      {/* <div className="w-[20%] py-2 border border-secondary">
      <h2 className="px-4 font-normal text-primary text-[18px]">
        Dubai Russian Escorts <br /> Location:
      </h2>
      <div className="flex flex-col px-4">
        
        <input
          type="text"
          value={searchLocation}
          onChange={handleSearchLocationChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          placeholder="Enter location"
        />
       
        <button
          className="bg-blue text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        
        <h3 className="text-lg font-semibold my-4">Sort by:</h3>
        <ul className="flex flex-col space-y-2">
          <li className="py-2">
            <button className="text-blue" onClick={sortByNeighborhood}>
              From Neighborhood
            </button>
          </li>
          <li className="py-2">
            <button className="text-blue" onClick={sortByCheapest}>
              From Cheapest
            </button>
          </li>
          <li className="py-2">
            <button className="text-blue" onClick={sortByClosest}>
              From Closest
            </button>
          </li>
          <li className="py-2">
            <button className="text-blue" onClick={sortByYoungest}>
              From Youngest
            </button>
          </li>
        </ul>
      </div>
    </div> */}

      {/* Second section with 50% width */}
      <div className="w-[85%] py-2 px-4 ">
        <div className='flex justify-between py-2'>
          <h1 className='text-blue text-[22px] font-normal'>Premimum Escort</h1>
          <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className='text-[14px]'>All Premimum Escort</p>
          </button>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {escort.map((escort) => (
            <EscortServiceCard key={escort.id} {...escort} />
          ))}
        </div>
       {/* ----------------------------------------------------------------------- */}
   
      </div>

      {/* Third section with 25% width */}
      <div className="w-[15%] py-2 border border-secondary bg-black"></div>
    </div>

  )
}

export default MainBody