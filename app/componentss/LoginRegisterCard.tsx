

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 

import { RegisterForm } from "@/app/componentss/RegisterForm" 
import { LoginForm } from "@/app/componentss/LoginForm"  

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"



const LoginRegisterCard: React.FC<{ onClose: () => void }> = ({ onClose }) => { 
    const [isNotRegistered, setIsNotRegistered] = useState(false)

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "/my-profile" });
    };

    return (
        <Card className="relative w-full z-20 ">
            <CardHeader className='mt-8'>
                <CardTitle>Create an account or log in</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Google Sign-In Button */}
                <button onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    Continue with Google
                </button>

                {/* Divider */}
                <div className="my-4 flex items-center">
                    <hr className="w-full border-gray-400" />
                    <span className="px-2 text-gray-600">OR</span>
                    <hr className="w-full border-gray-400" />
                </div> 
    
                {/* Email Sign-In Form */}
                {isNotRegistered ? < RegisterForm /> : < LoginForm />}
                
            </CardContent>
            <CardFooter>
                <div className="flex flex-col">
                    <div
                        onClick={() => setIsNotRegistered(!isNotRegistered)}
                        className="text-orange-500 hover:text-orange-700 cursor-pointer"
                    >
                        {isNotRegistered ? "Sign in" : "Don't have an account? Sign up here."}
                    </div>
                    <div className="space-x-4 pt-4">
                        <Link
                            href="/terms-and-conditions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>


                {/* Close Button */}
                <div
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default LoginRegisterCard;
