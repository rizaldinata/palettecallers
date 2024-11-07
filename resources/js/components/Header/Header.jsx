import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center p-6 text-center lg:text-left">
            <div className="text-2xl font-bold">TintShade</div>
            <nav className="mt-4 lg:mt-0 space-x-4 lg:space-x-8 mr-6">
                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">My Library</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">About us</a>
            </nav>
            <div className="text-2xl mt-4 lg:mt-0">
                <i className="fas fa-user-circle"></i>
            </div>
        </header>
    );
}

export default Header;
