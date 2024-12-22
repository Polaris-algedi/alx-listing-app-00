// Header.tsx
import Image from "next/image";
import { useState, FC } from "react";

const Header: FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/logo.png" // Replace with your logo file path
          alt="Airbnb Clone Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer">
          <span className="sr-only">Search</span>
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <button className="bg-gray-200 p-2 rounded-full hover:shadow-lg">
          🌐
        </button>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <button className="text-sm font-semibold">Sign In</button>
          <button className="text-sm font-semibold">Sign Up</button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="col-span-3 mt-5 flex justify-evenly items-center text-gray-600">
        {["Rooms", "Mansion", "Countryside", "Apartments"].map((type) => (
          <p key={type} className="cursor-pointer hover:underline">
            {type}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
