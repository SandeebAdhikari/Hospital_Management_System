"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm"; // Adjust the path based on your folder structure

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform your sign-up logic here
    console.log("Sign-Up Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <AuthForm
        type="signUp"
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSignUp}
      />
    </div>
  );
};

export default SignUpPage;
