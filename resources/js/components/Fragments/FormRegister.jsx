import React, { useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";

const FormRegister = () => {
    const [formReg, setFormReg] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormReg({ ...formReg, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/register", {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200) {
                console.log("Login successful!");
            } else {
                console.error("Failed to login:", response.data.error);
                setError(response.data.error);
            }
        } catch (error) {
            setError("Terjadi kesalahan saat registrasi.");
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Sign Up</h2>
            <p className="mb-6 text-center text-lg text-gray-500">Create a free account with your email</p>

            {error && (
                <div className="flex items-center mb-4 p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg animate-fade-in">
                    <span className="text-sm">{error}</span>
                </div>
            )}

            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formReg.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formReg.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                
                <div className="mb-6">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formReg.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default FormRegister;
