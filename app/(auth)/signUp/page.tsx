"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
