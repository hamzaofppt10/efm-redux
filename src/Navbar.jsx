import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4 flex items-center justify-between">
            <div className="text-white text-xl">
                <Link to="/">Logo</Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/BMI" className="text-white hover:text-gray-400">BMI Calculator</Link>
                    </li>
                    {/* <li>
                        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;