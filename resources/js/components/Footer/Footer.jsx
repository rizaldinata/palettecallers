import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16 py-4 flex flex-col sm:flex-row justify-between items-center px-6 text-center sm:text-left">
            <div className="text-lg font-bold">TintShade</div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <i className="fas fa-heart text-red-500"></i>
                <span>Made with love</span>
            </div>
        </footer>
    );
}

export default Footer;
