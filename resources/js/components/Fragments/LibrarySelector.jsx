import React from 'react';

function LibrarySelector({ selectedLibrary, setSelectedLibrary }) {
    const libraries = ["TailwindCSS", "Bootstrap", "Material UI", "Foundation", "Bulma"];

    return (
        <div className="mt-8 flex justify-center space-x-4">
            {libraries.map((library) => (
                <button
                    key={library}
                    className={`${
                        selectedLibrary === library ? 'bg-gray-300' : 'bg-gray-200'
                    } text-gray-800 rounded-full px-4 py-2`}
                    onClick={() => setSelectedLibrary(library)}
                >
                    {library}
                </button>
            ))}
        </div>
    );
}

export default LibrarySelector;
