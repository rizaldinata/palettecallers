import React from "react";
import { useState } from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    // const handleLogin = async () => {
    //     try {
    //         const responData = await axios.post("/api/login", {
    //             email: formData.email,
    //             password: formData.password,
    //         });
            
    //         if(responData.status === 200) {
    //             console.log("Login successful!");
    //         } else {
    //             console.error("Failed to login:", responData.data.error);
    //             setError(responData.data.error);
    //         }
    //     }
    // };
    
    return (
        <>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Sign In</h2>
                <p className="mb-6 text-center text-lg text-gray-500">Login to continue to TintShade</p>

                {error && (
                    <div className="flex items-center mb-4 p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg animate-fade-in">
                        <span className="text-sm">{error}</span>
                    </div>
                )}

                <div className="mb-4">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold">Login</Button>
                {/* <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:text-blue-700">Register here</Link>
                </p> */}
            </div>
        </>
    )
}

export default FormLogin;