"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";

interface FormData {
  username: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign-In Data:", formData);
  };

  return (
    <div className="auth-align">
      <AuthForm
        type="signIn"
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSignIn}
      />
    </div>
  );
};

export default SignInPage;
