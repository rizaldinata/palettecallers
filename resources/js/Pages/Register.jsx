import React from "react";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-white p-6 lg:p-12">
                <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0 lg:mr-12">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Make your design easier and more colorful</h1>
                    <p className="text-lg text-gray-600">Helps you determine the color of your choice and makes it the source code instantly</p>
                </div>
                <FormRegister />
            </main>
        </>
    )
}

export default RegisterPage;