import React, { useState, useEffect } from 'react';

const hexToHsl = (hex) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.slice(0, 2), 16) / 255;
    let g = parseInt(hex.slice(2, 4), 16) / 255;
    let b = parseInt(hex.slice(4, 6), 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0);
        } else if (max === g) {
            h = (b - r) / d + 2;
        } else {
            h = (r - g) / d + 4;
        }
        h *= 60;
    }

    return { h, s: s * 100, l: l * 100 };
};

const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;
    
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;

    let r, g, b;
    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

const generateGradientFromHex = (hex) => {
    const { h, s, l } = hexToHsl(hex);
    const gradientColors = [];
    
    // Bagi lightness menjadi 9 tingkatan dari lightness awal hingga gelap
    const lightnessSteps = l > 30 ? Array.from({ length: 9 }, (_, i) => l - (i * (l / 8))) : Array.from({ length: 9 }, (_, i) => 30 - (i * 2.5));

    for (let i = 0; i < 9; i++) {
        gradientColors.push(hslToHex(h, s, lightnessSteps[i]));
    }

    return gradientColors;
};

const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const ColorPicker = () => {
    const [color, setColor] = useState('');
    const [gradientColors, setGradientColors] = useState([]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleGenerateGradient = () => {
        if (color) {
            const colors = generateGradientFromHex(color);
            setGradientColors(colors);
        }
    };

    useEffect(() => {
        const randomColor = getRandomHexColor();
        setColor(randomColor);
        const randomGradient = generateGradientFromHex(randomColor);
        setGradientColors(randomGradient);
    }, []);

    return (
        <>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                    type="text"
                    value={color}
                    onChange={handleColorChange}
                    placeholder="Masukkan kode warna HEX"
                    className="border border-gray-300 rounded-full px-4 py-2 text-center text-lg w-80"
                />
                <button
                    onClick={handleGenerateGradient}
                    className="bg-red-500 text-white rounded-full px-4 py-2 text-lg"
                >
                    Generate Gradient
                </button>
            </div>

            <div className="mt-4 flex justify-center">
                <div className="flex overflow-hidden rounded-lg">
                    {gradientColors.map((gradColor, index) => (
                        <div
                            key={index}
                            className="relative group w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all duration-300 ease-in-out hover:w-32 flex items-center justify-center"
                            style={{ backgroundColor: gradColor }}
                        >
                            <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm font-semibold">
                                {gradColor}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ColorPicker;
