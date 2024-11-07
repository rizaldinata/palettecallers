import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ColorPicker from '../components/Fragments/ColorPicker';
import LibrarySelector from '../components/Fragments/LibrarySelector';
import CodeDisplay from '../components/Fragments/CodeDisplay';
import Footer from '../components/Footer/Footer';

const TintShade = () => {
    const [color, setColor] = useState(" ");
    const [gradientColors, setGradientColors] = useState([
        "#FFE5E5", "#FFB3B3", "#FF8080", "#FF4D4D",
        "#FF1A1A", "#E60000", "#B30000", "#800000"
    ]);
    const [selectedLibrary, setSelectedLibrary] = useState("TailwindCSS");

    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main className="text-center mt-8 lg:mt-16 px-4">
                <h1 className="text-2xl lg:text-3xl font-bold mt-6">Determine your gradient color</h1>
                <p className="text-gray-600 mt-6 text-sm md:text-base">
                    <span>We will present a gradient color based on the color of your</span>
                    <br />
                    <span>choice, start by choosing your color below</span>
                </p>
                <ColorPicker color={color} setColor={setColor} gradientColors={gradientColors} />
            </main>
            <section className="mt-12 lg:mt-16 text-center px-4">
                <h2 className="text-xl lg:text-2xl font-bold">Code Generate</h2>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                    We generate code based on the color of your choice to make it easier to configure your favorite CSS library!
                </p>
                <LibrarySelector selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} />
                <CodeDisplay />
            </section>
            <Footer />
        </div>
    );
}

export default TintShade;
